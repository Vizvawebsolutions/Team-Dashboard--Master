const pool = require('../database/Db');
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_phone} = req.body;

    const emailCheckQuery = "SELECT * FROM users WHERE user_email = $1";
    const emailCheckResult = await pool.query(emailCheckQuery, [user_email]);

    if (emailCheckResult.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already exists. Please use a different email address.",
      });
    }
    const insertUserQuery =
      "INSERT INTO users(user_name, user_email, user_password,user_phone, admin_flag) VALUES ($1, $2, $3,$4, false) RETURNING *";
    const result = await pool.query(insertUserQuery, [
      user_name,
      user_email,
      user_password,
      user_phone
    ]);

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const signin = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    // Check if the user is an admin using the provided credentials
    if (
      user_email === process.env.ADMIN_EMAIL &&
      user_password === process.env.ADMIN_PASSWORD
    ) {
      const adminToken = jwt.sign(
        { isAdmin: true },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      return res.status(200).json({
        success: true,
        message: "Admin authentication successful",
        token: adminToken,
      });
    }

    // Regular user authentication process
    const result = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [user_email]
    );

    if (
      result.rows.length === 0 ||
      result.rows[0].user_password !== user_password
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = result.rows[0];
// Generate a JWT token for regular users
    const userToken = jwt.sign(
      { userID: user.id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      success: true,
      message: "User authentication successful",
      token: userToken,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

const UserDetails = async (req, res) => {
  try {
    const { user_id } = req.body; // Assuming you pass the user_id as a parameter

    // Fetch the user details along with the status from the database
    const query = `
      SELECT
        u.user_id,
        u.user_name,
        u.user_email,
        u.admin_flag,
        s.ind_status,
        u.user_phone
      FROM
        public.users u
      LEFT JOIN
        public.ind_status s ON u.ind_status_id = s.ind_status_id
      WHERE
        u.user_id = $1
    `;

    const result = await pool.query(query, [user_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const userDetails = result.rows[0];
    userDetails.ind_status_id = simulateStatusUpdate(userDetails);

    res.status(200).json({
      success: true,
      data: userDetails,
    });
  } catch (error) {
    console.error('Error fetching user details with status:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const simulateStatusUpdate = (userDetails) => {
  // Replace this with your actual logic for updating the status

  // Example: If the user is an admin, set status to 1 (online)
  if (userDetails.admin_flag) {
    return userDetails.ind_status_id;
  } else {
    // Simulate another condition (replace this with your actual logic)
    // For example, you might check if the user has recent activity in your application
    const hasRecentActivity = Math.random() < 0.8; // Simulating 80% chance of recent activity

    if (hasRecentActivity) {
      return userDetails.ind_status_id; // Assuming ind_status_id represents "online" in your database
    } else {
      return 2; // Assuming 2 represents "offline" in your database
    }
  }
};

const UserList = async (req, res) => {
  try {
    // Fetch the list of users from the database
    const query = `
      SELECT
        u.user_id,
        u.user_name,
        u.user_email,
        u.admin_flag,
        u.user_phone,
        s.ind_status_name AS status
      FROM
        public.users u
      LEFT JOIN
        public.ind_status s ON u.ind_status_id = s.ind_status_id
    `;

    const result = await pool.query(query);

    const userList = result.rows;

    res.status(200).json({
      success: true,
      data: userList,
    });
  } catch (error) {
    console.error('Error fetching user list:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};



module.exports = {
  signup,
  signin,
  UserDetails,
  UserList
};
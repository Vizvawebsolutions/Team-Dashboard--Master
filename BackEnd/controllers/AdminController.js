const pool = require('../database/Db');
const {addNotification} = require('../utils/notification');
const {getNotifications} = require('../utils/notification');

const createAssignment = async (req, res) => {
  try {
    const { candidate_name, user_name } = req.body;

    // Fetching relevant data from the candidates table based on the provided candidate name
    const candidateQuery = `
      SELECT c.candidate_id, c.candidate_email
      FROM candidates c
      WHERE c.candidate_name = $1
    `;
    const candidateResult = await pool.query(candidateQuery, [candidate_name]);

    if (candidateResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Candidate not found',
      });
    }

    const { candidate_id, candidate_email } = candidateResult.rows[0];

    // Fetch the user_id based on the provided user_name
    const userQuery = 'SELECT * FROM users WHERE user_name = $1';
    const userResult = await pool.query(userQuery, [user_name]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const user_id = userResult.rows[0].user_id;

    // Update the main table with user_id where candidate_id matches
    const updateMainTableQuery = `
      UPDATE main
      SET user_id = $1
      WHERE candidate_id = $2;
    `;

    const updateMainTableValues = [user_id, candidate_id];
    await pool.query(updateMainTableQuery, updateMainTableValues);

    // Fetching relevant data from the candidates table based on the provided candidate name
    const detailsQuery = `
      SELECT
        c.candidate_phone,
        g.gender_name,
        c.age,
        c.education,
        c.university,
        c.technology,
        c.total_experience_year,
        s.state_name,
        m.date_time_timezone,
        tt.task_type_name
      FROM candidates c
      LEFT JOIN gender g ON c.gender_id = g.gender_id
      LEFT JOIN state s ON c.state_id = s.state_id
      LEFT JOIN main m ON c.candidate_id = m.candidate_id
      LEFT JOIN task_type tt ON m.task_type_id = tt.task_type_id
      WHERE c.candidate_name = $1
    `;

    const detailsResult = await pool.query(detailsQuery, [candidate_name]);

    if (detailsResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Details not found for the candidate',
      });
    }

    const { candidate_phone, gender_name, age, education, university, technology, total_experience_year, state_name, date_time_timezone, task_type_name } = detailsResult.rows[0];

    // Construct the response JSON with the fetched data
    const responseData = {
      candidate_name,
      candidate_email,
      details: {
        candidate_phone,
        gender_name,
        age,
        education,
        university,
        technology,
        total_experience_year,
        state_name,
      },
      task_type_name,
      user: userResult.rows[0],
      date_time_timezone,
    };

    res.status(200).json({
      success: true,
      message: 'Assignment details retrieved successfully.',
      data: responseData,
    });
  } catch (error) {
    console.error('Error retrieving assignment details:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const getAssignmentsForUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const assignmentsQuery = `
      SELECT
        c.candidate_name,
        c.candidate_email,
        c.candidate_phone,
        g.gender_name,
        c.age,
        c.education,
        c.university,
        c.technology,
        c.total_experience_year,
        s.state_name,
        m.date_time_timezone,
        tt.task_type_name
      FROM main m
      JOIN candidates c ON m.candidate_id = c.candidate_id
      LEFT JOIN gender g ON c.gender_id = g.gender_id
      LEFT JOIN state s ON c.state_id = s.state_id
      LEFT JOIN task_type tt ON m.task_type_id = tt.task_type_id
      WHERE m.user_id = $1
    `;

    const assignmentsResult = await pool.query(assignmentsQuery, [user_id]);

    if (assignmentsResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Assignments not found for the user',
      });
    }

    const assignments = assignmentsResult.rows;

    res.status(200).json({
      success: true,
      message: 'Assignments retrieved successfully.',
      data: assignments,
    });
  } catch (error) {
    console.error('Error retrieving assignments:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const acknowledgeAssignment = async (req, res) => {
  try {
    const { user_id, candidate_id } = req.params;
    const { acknowledge_name } = req.body;

    // Get the main_id based on the candidate_id
    const getMainIdQuery = `
      SELECT main_id
      FROM main
      WHERE candidate_id = $1
    `;

    const mainIdResult = await pool.query(getMainIdQuery, [candidate_id]);

    if (mainIdResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Main record not found for the candidate',
      });
    }

    const { main_id } = mainIdResult.rows[0];

    // Update the acknowledgment status in the main table
    const updateMainQuery = `
      UPDATE main
      SET acknowledge_id = (SELECT acknowledge_id FROM task_acknowledgement WHERE acknowledge_name = $1)
      WHERE main_id = $2
    `;

    await pool.query(updateMainQuery, [acknowledge_name, main_id]);

    const userQuery = 'SELECT user_name FROM users WHERE user_id = $1';
    const userResult = await pool.query(userQuery, [user_id]);
    const userName = userResult.rows[0]?.user_name || 'Unknown User';

    // Fetch candidate name based on candidate_id
    const candidateQuery = 'SELECT candidate_name FROM candidates WHERE candidate_id = $1';
    const candidateResult = await pool.query(candidateQuery, [candidate_id]);
    const candidateName = candidateResult.rows[0]?.candidate_name || 'Unknown Candidate';

    // Add a notification
    const notificationMessage = `${userName} ${acknowledge_name} the task for ${candidateName}`;
    addNotification(notificationMessage);

    res.status(200).json({
      success: true,
      message: 'Assignment acknowledgment updated successfully.',
    });
  } catch (error) {
    console.error('Error updating assignment acknowledgment:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};


const getNotify = async (req, res) => {
  try {
    // Get all notifications
    const allNotifications = getNotifications();

    res.status(200).json({
      success: true,
      data: allNotifications,
    });
  } catch (error) {
    console.error('Error retrieving notifications:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const getId = async (req,res) => {
  try{
   const query = `
   select 
   c.candidate_name,
   u.user_name
   from main m
   left join candidates c on c.candidate_id = m.candidate_id
   left join users u on u.user_id = m.user_id;
 `
   const result = await pool.query(query);
    res.status(200).json({
      success: true,
      data: result.rows,
    });
   }catch(err){
     res.status(400).json({
      success: false,
      error : err.message
     })
  }
}

module.exports = {
  createAssignment,
  getAssignmentsForUser,
  acknowledgeAssignment,
  getNotify,
  getId
};

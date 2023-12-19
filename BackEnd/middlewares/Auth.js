const jwt = require('jsonwebtoken');
const pool = require('../database/Db');

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Assuming you have a 'users' table in your PostgreSQL database
      const query = 'SELECT * FROM users WHERE id = $1';
      const result = await pool.query(query, [userID]);

      // Check if the user with the given ID exists
      if (result.rows.length > 0) {
        // Attach user information to the request object
        req.user = result.rows[0];
        next();
      } else {
        res.status(401).json({
          success: false,
          message: 'Unauthorized user',
        });
      }
    } catch (err) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized user',
        error: err.message,
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized user No token',
    });
  }
};

module.exports = { checkUserAuth };
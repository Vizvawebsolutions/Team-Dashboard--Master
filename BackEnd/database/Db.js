const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
      // SSL options if required (depends on your RDS configuration)
      rejectUnauthorized: false // Use this only if you face certificate verification issues
    }
  });

  

module.exports = pool;
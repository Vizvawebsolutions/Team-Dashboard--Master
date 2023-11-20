// index.js
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Check the database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
  release();
});

// Define a route to fetch data from the database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM your_table_name'; // Replace 'your_table_name' with your actual table name

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
      return;
    }
    res.json(results.rows); // Send fetched data as JSON response
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

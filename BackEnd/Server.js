const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes using the cors middleware
app.use(cors());

// Create connection to MySQL database
const db = mysql.createConnection({
  host: "tmsdb.cnqltqgk9yzu.us-east-1.rds.amazonaws.com",
  database_name: "postgres",
  port: 5432,
  user: "postgres",
  password: "Vizva@123#123",
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});

// API endpoint to fetch data as per the provided query
app.get("/fetch-data", (req, res) => {
  const sql = "select * from task_list_data";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server Error");
    } else {
      res.json(results);
      //  console.log(results);
    }
  });
});

app.get("/", (req, res) => {
  if (req.session.role) {
    return res.json({ valid: true, role: req.session.role });
  } else {
    return res.json({ valid: false });
  }
});

app.post("/fetch-data", (req, res) => {
  const sql = "select * from leaders where email = ? and password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ Message: "Error inside Server" });
    if (result.length > 0) {
      req.session.role = result[0].role;
      return res.json({ Login: true });
    } else {
      return res.json({ Login: false });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

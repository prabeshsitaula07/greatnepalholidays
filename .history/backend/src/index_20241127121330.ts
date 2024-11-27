import express, { Request, Response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'greatnepalholidays',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1);
  } else {
    console.log('Connected to MySQL');
  }
});

// CRUD Routes

// Get all activities
app.post('/api/add-activity', (req, res) => {
  const { activity, place, price, country, imageurl, description } = req.body;

  const query = `INSERT INTO activity (activity, place, price, country, imageurl, description)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [activity, place, price, country, imageurl, description], (err, result) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to add activity' });
      }
      res.status(200).json({ message: 'Activity added successfully', id: result.insertId });
  });
});

// Show All Activities (GET endpoint)
app.get('/api/activities', (req, res) => {
  const query = 'SELECT * FROM activity';

  db.query(query, (err, results) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to fetch activities' });
      }
      res.status(200).json(results);
  });
});

// Get Activity Details (GET endpoint)
app.get('/api/activity/:id', (req, res) => {
  const activityId = req.params.id;
  const query = 'SELECT * FROM activity WHERE id = ?';

  db.query(query, [activityId], (err, results) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to fetch activity details' });
      }
      if (results.length === 0) {
          return res.status(404).json({ error: 'Activity not found' });
      }
      res.status(200).json(results[0]);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

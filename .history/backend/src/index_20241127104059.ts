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
app.get('/api/activities', (req: Request, res: Response) => {
  db.query('SELECT * FROM activity', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Create a new activity
app.post('/api/activities', (req: Request, res: Response) => {
  const { activity, place, price, country, imageurl, description } = req.body;
  const query =
    'INSERT INTO activity (activity, place, price, country, imageurl, description) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(
    query,
    [activity, place, price, country, imageurl, description],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Activity created successfully' });
    }
  );
});

// Update an activity
app.put('/api/activities/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { activity, place, price, country, imageurl, description } = req.body;
  const query =
    'UPDATE activity SET activity = ?, place = ?, price = ?, country = ?, imageurl = ?, description = ? WHERE id = ?';
  db.query(
    query,
    [activity, place, price, country, imageurl, description, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: 'Activity updated successfully' });
    }
  );
});

// Delete an activity
app.delete('/api/activities/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'DELETE FROM activity WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Activity deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

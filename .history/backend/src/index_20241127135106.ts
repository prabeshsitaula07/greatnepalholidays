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


// Add Activity (POST endpoint)
app.post('/api/add-activity', (req: Request, res: Response) => {
  const { activity, place, price, country, imageurl, description } = req.body;

  // Type assertion to ensure price is a number (since it comes as a string in the request body)
  const query = `INSERT INTO activity (activity, place, price, country, imageurl, description)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [activity, place, parseFloat(price), country, imageurl, description], (err, result: mysql.ResultSetHeader) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add activity' });
    }
    // Use result.insertId when result is of type ResultSetHeader
    res.status(200).json({ message: 'Activity added successfully', id: result.insertId });
  });
});

// Show All Activities (GET endpoint)
app.get('/api/activities', (req: Request, res: Response) => {
  const query = 'SELECT * FROM activity';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch activities' });
    }
    res.status(200).json(results);
  });
});

// Get Activity Details (GET endpoint)
app.get('/api/activity/:id', (req: Request, res: Response) => {
  const activityId = req.params.id;
  const query = 'SELECT * FROM activity WHERE id = ?';

  db.query(query, [activityId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch activity details' });
    }
    
    // Assert that `results` is an array of objects (or records)
    const activity = (results as any[])[0]; // Cast the results to any[] and access the first element
    
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    
    res.status(200).json(activity);
  });
});

// Add Nepal Package (POST endpoint)
app.post('/api/add-nepalpackage', (req: Request, res: Response) => {
  const { package_name, place, price, country, imageurl, description } = req.body;

  // Type assertion to ensure price is a number (since it comes as a string in the request body)
  const query = `INSERT INTO nepalpackages (package_name, place, price, country, imageurl, description)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [package_name, place, parseFloat(price), country, imageurl, description], (err, result: mysql.ResultSetHeader) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add package' });
    }
    // Use result.insertId when result is of type ResultSetHeader
    res.status(200).json({ message: 'Package added successfully', id: result.insertId });
  });
});

// Show All Nepal Pacakges (GET endpoint)
app.get('/api/nepalpackages', (req: Request, res: Response) => {
  const query = 'SELECT * FROM activity';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch activities' });
    }
    res.status(200).json(results);
  });
});

// Get Activity Details (GET endpoint)
app.get('/api/activity/:id', (req: Request, res: Response) => {
  const activityId = req.params.id;
  const query = 'SELECT * FROM activity WHERE id = ?';

  db.query(query, [activityId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch activity details' });
    }
    
    // Assert that `results` is an array of objects (or records)
    const activity = (results as any[])[0]; // Cast the results to any[] and access the first element
    
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    
    res.status(200).json(activity);
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

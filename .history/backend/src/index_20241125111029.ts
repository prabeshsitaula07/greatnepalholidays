import express, { Request, Response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import { RowDataPacket } from 'mysql2';

// Initialize dotenv to read environment variables
dotenv.config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'mysql',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'greatnepalholidays',
});

const promisePool = pool.promise();

// Initialize express
const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON request bodies

// CRUD Operations

// Create a user
app.post('/api/users', async (req: Request, res: Response) => {
    const { name, email, phone } = req.body;
    try {
      // Execute the INSERT query
      const [result] = await promisePool.execute(
        'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
        [name, email, phone]
      );
      
      // Get the insertId from the result
      const insertId = (result as mysql.ResultSetHeader).insertId;
      
      res.status(201).json({ id: insertId, name, email, phone });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating user' });
    }
  });
  

// Get all users
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Get a single user by id
app.get('/api/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      // Execute the SELECT query
      const [rows] = await promisePool.execute<RowDataPacket[]>(
        'SELECT * FROM users WHERE id = ?',
        [id]
      );
  
      // Check if we got any result
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching user' });
    }
  });

// Update a user
app.put('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  try {
    const [result] = await promisePool.execute(
      'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
      [name, email, phone, id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ id, name, email, phone });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Delete a user
app.delete('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [result] = await promisePool.execute('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
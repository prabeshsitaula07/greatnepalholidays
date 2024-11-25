import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',  // 'mysql' from docker-compose
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'greatnepalholidays',
});

export const promisePool = pool.promise();
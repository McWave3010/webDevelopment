import mysql2 from 'mysql2/promise';
import dotenv from "dotenv";



dotenv.config();
// Create a connection to the database

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
  });
  
  export default pool;

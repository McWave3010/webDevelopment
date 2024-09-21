
//import mysql from 'mysql';//-
import mysql from 'mysql2';//+

import dotenv from 'dotenv';

dotenv.config();

// Create a connection pool to the database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
    database: process.env.DATABASE,
    port: Number(process.env.DB_PORT) || 3306,
    connectionLimit: 10 // Limits the number of connections in the pool
});

// Error handling
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
    connection.release(); // Release the connection back to the pool
});

// Export the pool so it can be used in other files
export default pool;

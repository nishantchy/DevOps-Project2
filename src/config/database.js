const { Pool } = require("pg");

// Create connection pool
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://postgres:postgres@db:5432/devops_project_two",
});

// Test connection function
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL database");
    client.release();
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};

// Create tables if they don't exist
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Database tables initialized");
  } catch (err) {
    console.error("Database initialization error:", err.message);
  }
};

module.exports = {
  pool,
  connectDB,
  initDB,
  query: (text, params) => pool.query(text, params),
};

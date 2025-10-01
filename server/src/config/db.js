import pkg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { Pool } = pkg;

const pool = Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

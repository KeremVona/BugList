import pool from "../config/db.js";

export const getAllBugs = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM bugs");

    res.status(200).send(response.rows);
  } catch (err) {
    console.log("Server error", err.message);
    res.status(500).send("Server error");
  }
};

export const getBug = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await pool.query(
      "SELECT * FROM bugs WHERE id = (id) VALUES ($1)",
      [id]
    );

    res.status(200).send(response.rows[id]);
  } catch (err) {
    console.log("Server error", err.message);
    res.status(500).send("Server error");
  }
};

export const addBug = async (req, res) => {
  const { title, description, priority, status, category } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO bugs (title, description, priority, status, category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, priority, status, category]
    );

    res.send(response);
  } catch (err) {
    console.log("Server error", err.message);
    res.status(500).send("Server error");
  }
};

export const updateBug = async (req, res) => {};

export const deleteBug = async (req, res) => {};

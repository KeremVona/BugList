import pool from "../config/db.js";

export const getAllBugs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bugs");

    res.status(200).send(result.rows);
  } catch (err) {
    console.log("Server error", err.message);
    res.status(500).send("Server error");
  }
};

export const getBug = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM bugs WHERE id = $1", [id]);

    console.log(result.rows[0]);

    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.log("Server error", err.message);
    res.status(500).send("Server error");
  }
};

export const addBug = async (req, res) => {
  const { title, description, priority, status, category } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO bugs (title, description, priority, status, category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, priority, status, category]
    );

    res.send(result);
  } catch (err) {
    console.log("Server error", err.message);
    res.status(500).send("Server error");
  }
};

export const updateBug = async (req, res) => {
  const { title, description, priority, status, category } = req.body;
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE title = $1, description = $2, priority = $3, status = $4, category = $5 WHERE id = $6 RETURNING *",
      [title, description, priority, status, category, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Bug not found" });
    }

    res.status(200).json({ message: "Bug updated", bug: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const deleteBug = async (req, res) => {};

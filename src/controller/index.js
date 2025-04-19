const Item = require("../models/item");

exports.getItems = async (req, res) => {
  try {
    const items = await Item.getAll();
    res.json(items);
  } catch (err) {
    console.error("Error getting items:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.createItem = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const item = await Item.create(name);
    res.status(201).json(item);
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Database status check
exports.dbStatus = async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({
      message: "Database connected!",
      time: result.rows[0].now,
    });
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
};

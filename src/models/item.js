const db = require("../config/database");

class Item {
  static async getAll() {
    const result = await db.query(
      "SELECT * FROM items ORDER BY created_at DESC"
    );
    return result.rows;
  }

  static async create(name) {
    const result = await db.query(
      "INSERT INTO items (name) VALUES ($1) RETURNING *",
      [name]
    );
    return result.rows[0];
  }
}

module.exports = Item;

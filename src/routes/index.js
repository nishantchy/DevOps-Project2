const express = require("express");
const router = express.Router();
const controllers = require("../controller");

// Routes
router.get("/api/items", controllers.getItems);
router.post("/api/items", controllers.createItem);
router.get("/db-test", controllers.dbStatus);

// Root route
router.get("/", (req, res) => {
  res.json({
    message: "Express DevOps Demo API",
    version: "1.0.0",
    endpoints: [
      { method: "GET", path: "/api/items", description: "Get all items" },
      { method: "POST", path: "/api/items", description: "Create a new item" },
      {
        method: "GET",
        path: "/db-test",
        description: "Test database connection",
      },
      { method: "GET", path: "/health", description: "API health check" },
    ],
  });
});

module.exports = router;

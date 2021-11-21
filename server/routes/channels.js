const channelsRouter = require("express").Router();

const db = require("../db");

// Create a new channel
channelsRouter.post("/", async (request, response) => {
  const { name } = request.body;

  try {
    const result = await db.query(
      "INSERT INTO (name) channels VALUES ($1) RETURNING id",
      [name],
    );
    const newId = result.rows[0].id;
    response.status(201).send(`Channel added with ID: ${newId}`);
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

// Get a channel's messages
channelsRouter.get("/:id", async (request, response) => {
  const channelId = request.params.id;

  try {
    const result = await db.query(
      "SELECT messages.id, user_id, username, channel_id, content, created_at FROM messages INNER JOIN users ON messages.user_id = users.id WHERE channel_id = $1",
      [channelId],
    );
    response.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

// Add a new message to a channel
channelsRouter.post("/:id/add", async (request, response) => {
  const { userId, content } = request.body;
  const channelId = request.params.id;
  const currentTime = new Date();

  try {
    const result = await db.query(
      "INSERT INTO messages (user_id, channel_id, content, created_at) VALUES ($1, $2, $3, $4) RETURNING id",
      [userId, channelId, content, currentTime],
    );
    const newId = result.rows[0].id;
    response.status(201).send(`Message added with ID: ${newId}`);
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

// Get all channels
channelsRouter.get("/", async (request, response) => {
  try {
    const result = await db.query("SELECT * FROM channels");
    response.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
    response.status(500).send("A database error has occurred");
  }
});

module.exports = channelsRouter;
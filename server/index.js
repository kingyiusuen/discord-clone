require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const db = require("./db");

const server = http.createServer(app);
const io = new Server(server);
const clients = {};

io.on("connection", (socket) => {
  console.log("a user connected");
  //clients[socket.id] = user;

  socket.on("message", async (message) => {
    const { user, channelId, content } = message;
    const result = await db.query(
      "INSERT INTO messages (user_id, channel_id, content) VALUES ($1, $2, $3) RETURNING *",
      [user.id, channelId, content],
    );
    io.emit("message", {
      id: result.rows[0].id,
      content: message.content,
      createdAt: result.rows[0].created_at,
      channelId: message.channelId,
      user,
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
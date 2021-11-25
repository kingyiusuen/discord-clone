require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const db = require("./db");

const server = http.createServer(app);
const io = new Server(server);
const clients = {};

io.on("connection", (socket) => {
  socket.on("new-client", (user) => {
    clients[socket.id] = user;
    io.emit("update-member-list", Object.values(clients));
  })

  socket.on("message", async (message) => {
    const { user, channelId, content } = message;
    const result = await db.query(
      "INSERT INTO channel_messages (author_id, channel_id, content) "
      + "VALUES($1, $2, $3) RETURNING * ",
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

  socket.on("typing", () => {
    socket.broadcast.emit("typing", clients[socket.id]);
  });

  socket.on("stop-typing", () => {
    socket.broadcast.emit("stop-typing", clients[socket.id]);
  });

  socket.on("disconnect", () => {
    delete clients[socket.id];
    io.emit("update-member-list", Object.values(clients));
  });

});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
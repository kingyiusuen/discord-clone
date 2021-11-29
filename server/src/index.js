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
    clients[socket.id] = { ...user, activeChannelId: null };
    io.emit("update-member-list", Object.values(clients));
  })

  socket.on("set-active-channel", (activeChannelId) => {
    if (clients[socket.id].activeChannelId) {
      socket.leave(`Channel: ${clients[socket.id].activeChannelId}`);
    }
    clients[socket.id].activeChannelId = activeChannelId;
    socket.join(`Channel: ${activeChannelId}`);
  })

  socket.on("message", async (message) => {
    const { user, channelId, content } = message;
    const result = await db.query(
      "INSERT INTO messages (author_id, channel_id, content) "
      + "VALUES ($1, $2, $3) RETURNING * ",
      [user.id, channelId, content],
    );
    io.to(`Channel: ${channelId}`).emit("message", {
        id: result.rows[0].id,
        content: message.content,
        createdAt: result.rows[0].created_at,
        channelId: message.channelId,
        user,
      });
  });

  socket.on("direct-message", async (message) => {
    const { user, receiverId, content } = message;
    const result = await db.query(
      "INSERT INTO direct_messages (author_id, receiver_id, content) "
      + "VALUES ($1, $2, $3) RETURNING * ",
      [user.id, receiverId, content],
    );

    // Emit the message if the receiver is also online
    for (const socketId in clients) {
      if (clients[socketId].id === receiverId) {
        io.to(receiverSocketId).emit("message", {
            id: result.rows[0].id,
            content: message.content,
            createdAt: result.rows[0].created_at,
            authorId: user,
          });
        break;
      }
    }
  });

  socket.on("typing", () => {
    socket.broadcast
      .to(`Channel: ${clients[socket.id].activeChannelId}`)
      .emit("typing", clients[socket.id]);
  });

  socket.on("stop-typing", () => {
    socket.broadcast
      .to(`Channel: ${clients[socket.id].activeChannelId}`)
      .emit("stop-typing", clients[socket.id]);
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
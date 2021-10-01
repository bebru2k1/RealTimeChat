require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const db = require("./models");

//Middleware
app.use(cors());
app.use(express.json());

//Database
db.connect();

//Route
const userRoute = require("./controller/user.controller");
const conversationRoute = require("./controller/conversation.controller");

app.use("/v1/api/user", userRoute);
app.use("/v1/api/conversation", conversationRoute);

//Run Server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`App Run on PORT ${PORT}`);
});

// Socket setup
const io = require("socket.io")(server, {
  cors: {
    origin:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://real-time-chat-taupe.vercel.app/",
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("Socketio connect success");
  socket.emit("getId", socket.id);

  //Join room
  socket.on("ID_CONV", (data) => {
    if (data) {
      data.forEach((id) => {
        socket.join(`ROOMS_${id}`);
      });
    }
  });

  socket.on("SEND_MESS_CLIENT", (message) => {
    io.to(`ROOMS_${message.idConv}`).emit("SEND_MESS_SERVER", message);
  });

  socket.on("TYPING", (data) => {
    console.log(data);
    socket.to(`ROOMS_${data.idConversation}`).emit("TYPING_MESS", data);
  });

  socket.on("NOT_TYPING", (data) => {
    console.log(data);
    socket.to(`ROOMS_${data.idConversation}`).emit("NOT_TYPING_MESS", data);
  });
});

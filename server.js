const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

// Public folder serve karo
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg); // sab clients ko bhejo
    });
});

http.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

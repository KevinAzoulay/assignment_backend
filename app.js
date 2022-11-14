const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const port = process.env.PORT || 4000;
const app = express();
const cors = require("cors");
const config = require("./config/config");
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
const user_routes = require("./router/userRouter");
const codeBlocks_routes = require("./router/codeBlocksRouter");
const session_routes = require("./router/sessionRouter");
const log = console.log;
const db = mongoose.connection;

require("./models/userModel");
require("./config/passport")(passport);

mongoose.connect(config, { useUnifiedTopology: true, useNewUrlParser: true });
db.on("error", console.error.bind(console, "mongo connection error"));

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/running", (req, res) => {
  res.send("app is running...");
});

app.use("/api/user/", user_routes);
app.use("/api/codeblocks/", codeBlocks_routes);
app.use("/api/session/", session_routes);

// initialize http server on socket.io
http.listen(port, () => log(`server listening on port: ${port}`));
io.on("connection", (socket) => {
  log("connected");
  socket.on("message", (evt) => {
    log(evt);
    socket.broadcast.emit("message", evt);
  });
});
io.on("disconnect", (evt) => {
  log("some people left");
});

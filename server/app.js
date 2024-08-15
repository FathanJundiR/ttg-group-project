if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
// const router = require("./routes");
const { enterGame, getQuestionSet } = require("./helpers/quizz");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
let roomPool = {};

let testingRoomPool = [];

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = server;

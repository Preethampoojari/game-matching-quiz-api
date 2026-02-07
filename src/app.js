const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const matchmakingRoutes = require("./routes/matchmakingRoutes");
const quizRoutes = require("./routes/quizRoutes");
const answerRoutes = require("./routes/answerRoutes");

const app = express();

// database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/matchmaking", matchmakingRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/quiz", answerRoutes);

app.get("/", (req, res) => {
  res.send("Game Quiz App Running");
});

module.exports = app;

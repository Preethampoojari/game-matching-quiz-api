const express = require("express");
const { startQuiz } = require("../controllers/quizController");
const router = express.Router();

router.post("/start", startQuiz);

module.exports = router;

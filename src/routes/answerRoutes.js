const express = require("express");
const { submitAnswers, getResult } = require("../controllers/answerController");
const router = express.Router();

router.post("/submit", submitAnswers);
router.get("/result/:sessionId", getResult);

module.exports = router;

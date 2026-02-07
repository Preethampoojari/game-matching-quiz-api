const express = require("express");
const { matchPlayer } = require("../controllers/matchmakingController");
const router = express.Router();

router.post("/", matchPlayer);

module.exports = router;

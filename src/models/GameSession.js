const mongoose = require("mongoose");

const gameSessionSchema = new mongoose.Schema(
  {
    player1: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
    player2: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
    sessionId: { type: String },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    answers: {
      player1: {},
      player2: {},
    },
    scores: {
      player1: { type: Number, default: 0 },
      player2: { type: Number, default: 0 },
    },
    winner: String,
    answerSubmittedAt: {
      player1: Date,
      player2: Date,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("GameSession", gameSessionSchema);

const GameSession = require("../models/GameSession");
const Question = require("../models/Question");

exports.submitAnswers = async (req, res) => {
  try {
    const { sessionId, playerId, answers } = req.body;

    const session = await GameSession.findOne({ sessionId }).populate(
      "questions",
    );

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Identify player
    let playerkey;

    if (session.player1.toString() === playerId) {
      playerkey = "player1";
    } else if (session.player2.toString() === playerId) {
      playerkey = "player2";
    } else {
      return res.status(400).json({ message: "Invalid player" });
    }

    // This below code will Prevent the duplicate submission.
    if (session.answers[playerkey]) {
      return res.status(400).json({
        message: "You have already submitted answers",
      });
    }

    // save answer
    session.answers[playerkey] = answers;
    session.answerSubmittedAt[playerkey] = new Date();

    // calculate score
    let score = 0;

    session.questions.forEach((q) => {
      if (answers[q._id.toString()] === q.correctAnswer) {
        score++;
      }
    });

    session.scores[playerkey] = score;
    await session.save();

    res.json({
      message: "Answers submitted",
      score,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResult = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const session = await GameSession.findOne({ sessionId });

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Both players must submit answers
    if (!session.answers.player1 || !session.answers.player2) {
      return res.status(400).json({
        message: "Both players must submit answers",
      });
    }

    const { player1, player2 } = session.scores;

    let winner = "Draw";

    if (player1 > player2) {
      winner = "Player 1";
    } else if (player2 > player1) {
      winner = "Player 2";
    } else {
      // If Scores are equal then check who submitted first
      const p1Time = session.answerSubmittedAt.player1;
      const p2Time = session.answerSubmittedAt.player2;

      if (p1Time && p2Time) {
        if (p1Time < p2Time) winner = "Player 1";
        else if (p2Time < p1Time) winner = "Player 2";
        else winner = "Draw"; // If Scores and time both are equal then it will give winner as Draw
      }
    }

    session.winner = winner;
    await session.save();

    res.json({
      scores: session.scores,
      winner,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

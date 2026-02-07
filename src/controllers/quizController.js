const GameSession = require("../models/GameSession");
const Question = require("../models/Question");

exports.startQuiz = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await GameSession.findOne({ sessionId }).populate(
      "player1",
    );

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // If questions already exist, return them
    if (session.questions.length > 0) {
      const populatedSession = await session.populate("questions");
      return res.json(populatedSession.questions);
    }

    // get level from player1
    const level = session.player1.level;

    // fetch random 10 questions
    const questions = await Question.aggregate([
      { $match: { level } },
      { $sample: { size: 10 } },
    ]);

    // Save only ids
    session.questions = questions.map((q) => q._id);

    await session.save();

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

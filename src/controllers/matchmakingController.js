const Player = require("../models/Player");
const GameSession = require("../models/GameSession");
const queues = require("../utils/queue");
const { v4: uuidv4 } = require("uuid");

exports.matchPlayer = async (req, res) => {
  try {
    const { name, level } = req.body;

    // create player
    const player = await Player.create({ name, level });

    if (queues[level].length > 0) {
      const opponent = queues[level].shift();

      // create game session
      const session = await GameSession.create({
        player1: opponent._id,
        player2: player._id,
        sessionId: uuidv4(),
      });

      // update player status
      player.status = "playing";
      opponent.status = "playing";

      await player.save();
      await opponent.save();

      return res.json({
        message: "Match Found",
        session,
      });
    }

    // Add player to queue
    queues[level].push(player);

    res.json({
      message: "Waiting for opponent",
      player,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

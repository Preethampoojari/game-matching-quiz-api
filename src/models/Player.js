const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      required: true,
    },
    status: { type: String, enum: ["waiting", "playing"], default: "waiting" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Player", playerSchema);

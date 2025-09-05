const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 16,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "https://i.ibb.co/2nYVq6G/default-avatar.png",
    },
    description: {
      type: String,
      default: "Jogador iniciante do FutQuiz ⚽",
    },
    level: {
        type: Number,
        default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student"
    },

    streak: {
      type: Number,
      default: 0
    },

    xp: {
      type: Number,
      default: 0
    },

    jlptLevel: {
      type: String,
      default: "N5"
    },

    avatar: {
      type: String,
      default: ""
    },

    dailyGoal: {
      type: Number,
      default: 50
    },

    lastLogin: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model(
  "User",
  userSchema
);

export default User;
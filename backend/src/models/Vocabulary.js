import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema(
  {
    japaneseWord: {
      type: String,
      required: true,
    },

    romaji: {
      type: String,
      required: true,
    },

    meaning: {
      type: String,
      required: true,
    },

    exampleSentence: {
      type: String,
      default: "",
    },

    exampleMeaning: {
      type: String,
      default: "",
    },

    audioUrl: {
      type: String,
      default: "",
    },

    jlptLevel: {
      type: String,
      enum: ["N5", "N4", "N3", "N2", "N1"],
      default: "N5",
    },

    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Vocabulary = mongoose.model(
  "Vocabulary",
  vocabularySchema
);

export default Vocabulary;
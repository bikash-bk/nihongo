import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    videoUrl: {
      type: String
    },

    level: {
      type: String,
      default: "N5"
    },

    vocabulary: [
      {
        word: String,
        meaning: String,
        pronunciation: String
      }
    ],

    quizzes: [
      {
        question: String,
        options: [String],
        answer: String
      }
    ]
  },
  {
    timestamps: true
  }
);

const Lesson = mongoose.model(
  "Lesson",
  lessonSchema
);

export default Lesson;
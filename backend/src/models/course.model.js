import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    level: {
      type: String,
      enum: ["N5", "N4", "N3", "N2", "N1"],
      default: "N5"
    },

    thumbnail: {
      type: String
    },

    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson"
      }
    ]
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model(
  "Course",
  courseSchema
);

export default Course;
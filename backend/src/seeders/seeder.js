import mongoose from "mongoose";

import dotenv from "dotenv";

import Course from "../models/Course.js";

import Lesson from "../models/Lesson.js";

import Vocabulary from "../models/Vocabulary.js";

import Quiz from "../models/Quiz.js";

import courses from "../data/courses.js";

import lessons from "../data/lessons.js";

import vocabulary from "../data/vocabulary.js";

import quizzes from "../data/quizzes.js";

dotenv.config();


// CONNECT DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  });


// IMPORT DATA
const importData = async () => {
  try {

    // DELETE OLD DATA
    await Course.deleteMany();

    await Lesson.deleteMany();

    await Vocabulary.deleteMany();

    await Quiz.deleteMany();


    // INSERT NEW DATA
    const createdCourses =
      await Course.insertMany(courses);

    const createdLessons =
      await Lesson.insertMany(
        lessons.map((lesson) => ({
          ...lesson,
          course:
            createdCourses[0]._id,
        }))
      );

    await Vocabulary.insertMany(
      vocabulary.map((word) => ({
        ...word,
        lesson:
          createdLessons[0]._id,
      }))
    );

    await Quiz.insertMany(quizzes);

    console.log(
      "Database Seeded Successfully"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

importData();
import Course from "../models/Course.js";

import Lesson from "../models/Lesson.js";

import Vocabulary from "../models/Vocabulary.js";

import User from "../models/User.js";


// STUDENT DASHBOARD
export const getStudentDashboard =
  async (req, res) => {
    try {
      const courses =
        await Course.countDocuments();

      const lessons =
        await Lesson.countDocuments();

      const vocabulary =
        await Vocabulary.countDocuments();

      res.status(200).json({
        success: true,

        stats: {
          courses,
          lessons,
          vocabulary,
          xp: 1200,
          streak: 7,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


// ADMIN DASHBOARD
export const getAdminDashboard =
  async (req, res) => {
    try {
      const users =
        await User.countDocuments();

      const courses =
        await Course.countDocuments();

      const lessons =
        await Lesson.countDocuments();

      const vocabulary =
        await Vocabulary.countDocuments();

      res.status(200).json({
        success: true,

        stats: {
          users,
          courses,
          lessons,
          vocabulary,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
import User from "../models/user.model.js";

import Course from "../models/course.model.js";

import Lesson from "../models/lesson.model.js";


// GET DASHBOARD STATS
export const getDashboardStats =
  async (req, res) => {
    try {
      const users =
        await User.countDocuments();

      const courses =
        await Course.countDocuments();

      const lessons =
        await Lesson.countDocuments();

      res.json({
        users,
        courses,
        lessons
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };


// GET USERS
export const getUsers = async (
  req,
  res
) => {
  try {
    const users =
      await User.find().select(
        "-password"
      );

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// DELETE USER
export const deleteUser = async (
  req,
  res
) => {
  try {
    await User.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "User deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
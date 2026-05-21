import Course from "../models/Course.js";


// CREATE COURSE
export const createCourse = async (req, res) => {
  try {
    const { title, description, level, thumbnail } = req.body;

    const course = await Course.create({
      title,
      description,
      level,
      thumbnail,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL COURSES
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("createdBy", "username email");

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE COURSE
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("createdBy", "username");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ENROLL COURSE
export const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    if (
      course.studentsEnrolled.includes(req.user._id)
    ) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled",
      });
    }

    course.studentsEnrolled.push(req.user._id);

    await course.save();

    res.status(200).json({
      success: true,
      message: "Enrollment successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
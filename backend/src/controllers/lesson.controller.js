import Lesson from "../models/Lesson.js";


// CREATE LESSON
export const createLesson = async (req, res) => {
  try {
    const {
      title,
      description,
      videoUrl,
      audioUrl,
      notes,
      japaneseSentence,
      englishMeaning,
      course,
    } = req.body;

    const lesson = await Lesson.create({
      title,
      description,
      videoUrl,
      audioUrl,
      notes,
      japaneseSentence,
      englishMeaning,
      course,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Lesson created successfully",
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL LESSONS
export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find()
      .populate("course", "title level");

    res.status(200).json({
      success: true,
      lessons,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE LESSON
export const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate("course", "title level");

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found",
      });
    }

    res.status(200).json({
      success: true,
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET LESSONS BY COURSE
export const getLessonsByCourse = async (
  req,
  res
) => {
  try {
    const lessons = await Lesson.find({
      course: req.params.courseId,
    });

    res.status(200).json({
      success: true,
      lessons,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
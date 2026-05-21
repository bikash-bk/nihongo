import Quiz from "../models/Quiz.js";


// CREATE QUIZ
export const createQuiz = async (
  req,
  res
) => {
  try {
    const {
      title,
      description,
      level,
      questions,
    } = req.body;

    const quiz = await Quiz.create({
      title,
      description,
      level,
      questions,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL QUIZZES
export const getQuizzes = async (
  req,
  res
) => {
  try {
    const quizzes = await Quiz.find();

    res.status(200).json({
      success: true,
      quizzes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE QUIZ
export const getQuizById = async (
  req,
  res
) => {
  try {
    const quiz = await Quiz.findById(
      req.params.id
    );

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      success: true,
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// SUBMIT QUIZ
export const submitQuiz = async (
  req,
  res
) => {
  try {
    const quiz = await Quiz.findById(
      req.params.id
    );

    const answers = req.body.answers;

    let score = 0;

    quiz.questions.forEach(
      (question, index) => {
        if (
          question.correctAnswer ===
          answers[index]
        ) {
          score++;
        }
      }
    );

    res.status(200).json({
      success: true,
      score,
      total: quiz.questions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
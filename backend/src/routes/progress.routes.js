import express from "express";

import {
  getUserProgress,
  completeLesson,
  completeQuiz,
  getLeaderboard,
} from "../controllers/progress.controller.js";

import {
  protect,
} from "../middlewares/auth.middleware.js";

const router = express.Router();


// USER PROGRESS
router.get(
  "/me",
  protect,
  getUserProgress
);


// COMPLETE LESSON
router.post(
  "/lesson/:lessonId",
  protect,
  completeLesson
);


// COMPLETE QUIZ
router.post(
  "/quiz/:quizId",
  protect,
  completeQuiz
);


// LEADERBOARD
router.get(
  "/leaderboard",
  getLeaderboard
);

export default router;
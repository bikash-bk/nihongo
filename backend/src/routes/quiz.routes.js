import express from "express";

import {
  createQuiz,
  getQuizzes,
  getQuizById,
  submitQuiz,
} from "../controllers/quiz.controller.js";

import {
  protect,
  adminOnly,
} from "../middlewares/auth.middleware.js";

const router = express.Router();


// PUBLIC
router.get("/", getQuizzes);

router.get("/:id", getQuizById);


// STUDENT
router.post(
  "/submit/:id",
  protect,
  submitQuiz
);


// ADMIN
router.post(
  "/create",
  protect,
  adminOnly,
  createQuiz
);

export default router;
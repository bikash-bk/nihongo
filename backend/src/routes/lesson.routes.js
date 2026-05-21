import express from "express";

import {
  createLesson,
  getLessons,
  getLessonById,
  getLessonsByCourse,
} from "../controllers/lesson.controller.js";

import {
  protect,
  adminOnly,
} from "../middlewares/auth.middleware.js";

const router = express.Router();


// PUBLIC
router.get("/", getLessons);

router.get("/:id", getLessonById);

router.get(
  "/course/:courseId",
  getLessonsByCourse
);


// ADMIN
router.post(
  "/create",
  protect,
  adminOnly,
  createLesson
);

export default router;
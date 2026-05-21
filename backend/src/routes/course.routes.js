import express from "express";

import {
  createCourse,
  getCourses,
  getCourseById,
  enrollCourse,
} from "../controllers/course.controller.js";

import {
  protect,
  adminOnly,
} from "../middlewares/auth.middleware.js";

const router = express.Router();


// PUBLIC
router.get("/", getCourses);
router.get("/:id", getCourseById);


// ADMIN
router.post(
  "/create",
  protect,
  adminOnly,
  createCourse
);


// STUDENT
router.post(
  "/enroll/:id",
  protect,
  enrollCourse
);

export default router;
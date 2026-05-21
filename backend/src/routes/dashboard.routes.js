import express from "express";

import {
  getStudentDashboard,
  getAdminDashboard,
} from "../controllers/dashboard.controller.js";

import {
  protect,
  adminOnly,
} from "../middlewares/auth.middleware.js";

const router = express.Router();


// STUDENT
router.get(
  "/student",
  protect,
  getStudentDashboard
);


// ADMIN
router.get(
  "/admin",
  protect,
  adminOnly,
  getAdminDashboard
);

export default router;
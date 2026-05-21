import express from "express";

import protect from "../middleware/auth.middleware.js";

import adminMiddleware from "../middleware/admin.middleware.js";

import {
  getDashboardStats,
  getUsers,
  deleteUser
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  adminMiddleware,
  getDashboardStats
);

router.get(
  "/users",
  protect,
  adminMiddleware,
  getUsers
);

router.delete(
  "/users/:id",
  protect,
  adminMiddleware,
  deleteUser
);

export default router;
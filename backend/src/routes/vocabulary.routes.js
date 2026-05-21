import express from "express";

import {
  createVocabulary,
  getVocabulary,
  getVocabularyById,
  searchVocabulary,
} from "../controllers/vocabulary.controller.js";

import {
  protect,
  adminOnly,
} from "../middlewares/auth.middleware.js";

const router = express.Router();


// PUBLIC
router.get("/", getVocabulary);

router.get("/search", searchVocabulary);

router.get("/:id", getVocabularyById);


// ADMIN
router.post(
  "/create",
  protect,
  adminOnly,
  createVocabulary
);

export default router;
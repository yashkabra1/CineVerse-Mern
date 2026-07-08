import express from "express";
import {
  addMovie,
  getMovies,
} from "../controllers/movieController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public
router.get("/", getMovies);

// Admin Only
router.post("/", protect, adminOnly, addMovie);

export default router;
import express from "express";
import { createIssue, getAllIssues, updateIssueStatus, } from "../controllers/issueController.js";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

// Create Issue
router.post("/", protect, createIssue);
router.get("/", protect, getAllIssues);
router.put(
  "/:id/status",
  protect,
  adminOnly,
  updateIssueStatus
);

export default router;
import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

// Sample route: Fetching the user details with authentication middleware

router.post("/add", isAuthenticated, userController.add);
router.put("/complete", isAuthenticated, userController.complete);

export default router;

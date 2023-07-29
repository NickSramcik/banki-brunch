import express from "express";
const router = express.Router();
import HomeController from "../controllers/homeController.js";

router.get("/", HomeController.home);
router.get("/questions", HomeController.questionsView);
router.get("/types", HomeController.typesView);

export default router;

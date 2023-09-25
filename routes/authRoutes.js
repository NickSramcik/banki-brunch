import express from "express";
const router = express.Router();
import AuthController from "../controllers/authController.js";

router.get('/getUser', AuthController.getUser)
router.get('/discord', AuthController.authDiscord)
router.get('/discord/callback', AuthController.authDiscordCallback)
router.post('/logout', AuthController.logout)

export default router;
import express from "express"
import validate from "../middleware/validate"
import { signin, signup } from "../controller/authController"
import { signUpInput } from "../zod/schema"

const authRouter = express.Router()

authRouter.post("/signup", validate(signUpInput), signup)
authRouter.post("/signin", validate(signUpInput), signin)

export default authRouter

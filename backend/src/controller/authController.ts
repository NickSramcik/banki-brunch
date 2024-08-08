import { NextFunction, Request, Response } from "express"
import UserModel, { createUser, getUserByEmail } from "../models/user"
import jwt from "jsonwebtoken"

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByEmail(req.body.email)
    if (user) {
      return res.status(400).json({
        status: "failed",
        message: "Email already exist"
      })
    }
    const newUser = await createUser(req.body)
    const token = await jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30 days"
    })
    res.cookie("jwt", token, {
      secure: false,
      httpOnly: true,
      sameSite: "none"
    })
    res.status(201).json({
      status: "success",
      message: "Signed up successfully"
    })
  } catch (error) {
    return res.json({
      status: "error",
      message: "something went wrong"
    })
  }
}

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, email } = req.body
    const user = await UserModel.findOne({ email }).select({
      password: true,
      email: true
    })
    if (!user) {
      return res.json({
        status: "failed",
        message: "incorrect email or password"
      })
    }
    if (!(await user.validatePassword(password, user.password))) {
      return res.status(401).json({
        status: "failed",
        message: "incorrect email or password"
      })
    }
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30 days"
    })
    res.cookie("jwt", token, {
      secure: false,
      httpOnly: true,
      sameSite: "none"
    })
    res.status(201).json({
      status: "success",
      message: "Signed in successfully"
    })
  } catch (error) {
    return res.json({
      status: "error",
      message: "something went wrong"
    })
  }
}

import express from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import authRouter from "./router/auth"

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.WHITELIST_ORIGIN, credentials: true }))
app.use(express.json())
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRouter)

export default app

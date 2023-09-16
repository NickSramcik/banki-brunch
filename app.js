import express from "express";
const app = express();
import cookieParser from 'cookie-parser';
import passport from 'passport';
import connectDB from './config/database.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import 'dotenv/config';
import passportConfig from "./config/passport.js";
passportConfig(passport);

import mockUser from './config/mockUser.json' assert { type: 'json' }
import User from './models/userModel.js'


// ***************************** 
// Sessions (MongoDB)


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING, dbName: 'banki-brunch' })
    })
  )
} else {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING, dbName: 'banki-brunch' }),
      cookie: {
        secure: true, // Set to true if you're using HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "none",
      }
    })
  )
}
app.use(passport.initialize());
app.use(passport.session());

// Set up mock user in development environment
if (process.env.NODE_ENV === "development") {
  console.log("Running development environment (using Mock User)")
  app.use(async (req, res, next) => {
    if (process.env.MOCK_USER !== "true") return next()
    req.user = mockUser
    await User.findOneAndUpdate(
      { _id: mockUser._id },
      { $setOnInsert: mockUser },
      { upsert: true, new: true }
    ).exec()
    next()
  })
}

//import mongoose from "mongoose"; // not set up yet

// Import routers
import homeRoutes from "./routes/homeRoute.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Import global middlewares
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";

// Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost/bankiBrunch", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   });

app.set("view engine", "ejs");

app.use(logger); // Log every request

// Using the routers
app.use("/", homeRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

// Global error handler (should be the last middleware)
app.use(errorHandler);

const PORT = 3000;

connectDB().then(() => app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`)))

export default app;
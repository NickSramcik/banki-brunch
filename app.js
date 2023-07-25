import express from "express";
const app = express();

//import mongoose from "mongoose"; // not set up yet

// Import routers
import homeRoutes from "./routes/homeRoute.js";
import userRoutes from "./routes/userRoutes.js";

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

// Global error handler (should be the last middleware)
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

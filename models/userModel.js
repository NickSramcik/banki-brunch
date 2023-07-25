const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const questionSchema = new mongoose.Schema([
  {
    question: String,
    type: String,
    answer: String,
  },
]);

const User = mongoose.model("User", userSchema);
const Question = mongoose.model("Question", questionSchema);

module.exports = {
  User,
  Question,
};

const mongoose = require("mongoose");

// These mongoose schemas use discriminators for inheritance and nesting with subdocuments
// Changes to a subdocument require changing the parent document, see the subdocs reference.
// A schema with a discriminator can be used and referred to like any other schema.
// This database architecture should accomodate several hundred answers and comments per question.

// references:
// https://mongoosejs.com/docs/discriminators.html
// https://mongoosejs.com/docs/subdocs.html
// https://dorukgunes.medium.com/nested-discriminator-with-mongoose-ffa0afef5eca

const Post = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  }
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { discriminatorKey: '_type' });

const AnswerPost = new mongoose.Schema({
  isAccepted: {
    type: Boolean,
    default: false,
  },
  comments: [Post],
})
const Answer = Post.discriminator ('Answer', AnswerPost)

const QuestionPost = new mongoose.Schema({
  isActive: { // only display active questions during Banki Brunch
    type: Boolean,
    default: false,
  },
  source: { // example: 'The Bank'
    type: String,
    required: true,
  },
  topic: {  // consider using a document reference for topic
    type: String,
    required: true,
  }, 
  comments: [Post],
  answers: [Answer],
});
const Question = Post.discriminator('Question', QuestionPost);

module.exports = {
  Post: mongoose.model("Post", Post),
  Answer: mongoose.model('Answer', Answer),
  Question: mongoose.model('Question', Question)
}

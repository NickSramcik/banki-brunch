import mongoose, { Document, Schema, Model } from "mongoose"

interface IQuestion extends Document {
  question: string
  type: "behavioral" | "HTML" | "CSS" | "JavaScript" | "Node.js" | "CS Theory"
}

const questionSchema: Schema<IQuestion> = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ["behavioral", "HTML", "CSS", "JavaScript", "Node.js", "CS Theory"]
    }
  },
  { timestamps: true }
)

const QuestionModel: Model<IQuestion> = mongoose.model<IQuestion>(
  "Question",
  questionSchema
)

export default QuestionModel

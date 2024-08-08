import mongoose from "mongoose"

const connectToDb = async (): Promise<void> => {
  mongoose.Promise = Promise
  const connectingString = process.env.DB_URI
  if (!connectingString) throw new Error("Connection string not found")
  await mongoose.connect(connectingString)
}

export default connectToDb

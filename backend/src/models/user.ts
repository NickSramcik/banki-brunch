import mongoose from "mongoose"
import bcrypt from "bcrypt"
interface User {
  username: string
  email: string
  password?: string
  profilePic?: string
  createdAt: Date
  updatedAt: Date
}

interface Iuser extends Document {
  username: string
  email: string
  password: string
  profilePic: string
  createdAt: Date
  updatedAt: Date
  validatePassword: (password: string, hashPassword: string) => Promise<boolean>
  hashPassword: (password: string) => Promise<string>
}

const userSchema = new mongoose.Schema<Iuser>(
  {
    username: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      select: false
    },
    profilePic: { type: String, default: "api.dicebear.com/7.x/bottts/png" }
  },
  {
    timestamps: true
  }
)

userSchema.methods.validatePassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword)
}

userSchema.methods.hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10)
}

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    console.log("from mifl")
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

export const getUser = () => UserModel.find()
export const getUserById = (id: string) => UserModel.findById(id)
export const getUserByEmail = (email: string) =>
  UserModel.findOne({ email: email }).exec()
export const createUser = (user: User) => UserModel.create(user)
export const deleteUserById = (id: string) => UserModel.findByIdAndDelete(id)
export const updateUserById = (id: string, values: Iuser) =>
  UserModel.findByIdAndDelete(id)

const UserModel = mongoose.model<Iuser>("User", userSchema)
export default UserModel

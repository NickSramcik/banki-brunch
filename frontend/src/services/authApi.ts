import { AxiosError, AxiosResponse } from "axios"
import axios from "../utils/axios"

export interface SigninInput {
  email: string
  password: string
}
export interface SignupInput {
  username?: string
  email: string
  password: string
}

export const signin = async ({ email, password }: SigninInput) => {
  try {
    const res = await axios("auth/signin", {
      method: "POST",
      data: {
        email,
        password
      }
    })
    return res.data.user
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message)
    }
  }
}

export const signup = async ({ email, password }: SignupInput) => {
  try {
    const res: AxiosResponse = await axios("auth/signup", {
      method: "POST",
      data: {
        email,
        password
      }
    })
    return res.data.user
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message)
    }
  }
}

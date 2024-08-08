import { z } from "zod"

export const signUpInput = z.object({
  email: z
    .string({ required_error: "Email is require" })
    .email({ message: "Please provide a valid email" }),
  password: z
    .string({ required_error: "Please provide password" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, { message: "Password cannot be longer than 20 characters" }),
  username: z.string().optional()
})

export const signInInput = z.object({
  email: z
    .string({ required_error: "Email is require" })
    .email({ message: "Please provide a valid email" }),
  password: z
    .string({ required_error: "Please provide password" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, { message: "Password cannot be longer than 20 characters" })
})

export type SignUpInput = z.infer<typeof signUpInput>
export type SignInInput = z.infer<typeof signInInput>

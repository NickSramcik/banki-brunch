import { Link } from "react-router-dom"
import Button from "../../ui/Button"
import useSignin from "./useSignin"
import useSignup from "./useSignup"
import { FormEvent, useRef } from "react"

function AuthForm({ type }: { type: "signin" | "signup" }) {
  const heading =
    type === "signin" ? "Welcome back" : "Start preparing now with 100devs"
  const buttonText = type === "signin" ? "Sign in" : "Sign up"
  const footerText =
    type === "signin" ? "New To Banki? " : "Already have an account? "
  const to = type === "signin" ? "/signup" : "/signin"
  const linkText = type === "signin" ? "signup" : "signin"
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { signin, isPending: isSigningIn } = useSignin()
  const { signup, isPending: isSigningUp } = useSignup()
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || ""
    }
    if (type === "signin") {
      signin(data)
    }
    if (type === "signup") {
      signup(data)
    }
  }
  return (
    <div>
      <h3 className="text-neutral-50 lg:text-3xl font-medium max-w-80 leading-4">
        {heading}
      </h3>
      <form className="flex flex-col gap-4 mt-8" onSubmit={submitForm}>
        <div className="flex flex-col gap-2 w-96">
          <label
            className="text-sm font-medium text-neutral-200"
            htmlFor="email"
          >
            Email :
          </label>
          <input
            className="bg-transparent border-0 grow border-b-2 border-neutral-50  outline-0 text-neutral-50 py-2 focus:border-blue-600"
            ref={emailRef}
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label
            className="text-sm font-medium text-neutral-200"
            htmlFor="password"
          >
            Password :
          </label>
          <input
            className="bg-transparent border-0 grow border-b-2 border-neutral-50  outline-0 text-neutral-50 py-2 focus:border-blue-600"
            ref={passwordRef}
            id="password"
          />
        </div>

        <Button disabled={isSigningIn || isSigningUp}>{buttonText}</Button>
      </form>
      <footer className="mt-8">
        <p className="text-neutral-50">
          {footerText}
          <Link className="text-blue-600 underline" to={to}>
            {linkText}
          </Link>
        </p>
      </footer>
    </div>
  )
}
export default AuthForm

import AuthForm from "../features/auth/AuthForm"

function SignUp() {
  return (
    <div className="bg-neutral-800 min-h-screen flex items-center justify-center">
      <div className="flex ">
        <div className="hidden md:block"></div>
        <AuthForm type="signup" />
      </div>
    </div>
  )
}

export default SignUp

import Button from "../../ui/Button"

function AuthNav() {
  return (
    <div className="flex items-center justify-center gap-2 lg:gap-4">
      <Button to="/signin">Login</Button>
      <Button type="transparent" to="/signup">
        Signup
      </Button>
    </div>
  )
}

export default AuthNav

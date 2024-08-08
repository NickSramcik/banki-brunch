import AuthNav from "../features/auth/AuthNav"

function Header() {
  return (
    <div className="bg-neutral-900">
      <header className="flex max-w-[1300px] m-auto justify-between border-b-2 p-2 border-neutral-600 lg:p-4 items-center">
        <Logo />
        <AuthNav />
      </header>
    </div>
  )
}

function Logo() {
  return (
    <div>
      <span className="font-bold text-lg lg:text-xl text-blue-600 font-mono">
        Banki
      </span>
    </div>
  )
}

export default Header

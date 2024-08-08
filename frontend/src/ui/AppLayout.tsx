import { ReactNode } from "react"
import Header from "./Header"

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-neutral-900">
      <Header />
      <main className="max-w-[1300px] m-auto min-h-screen">{children}</main>
    </div>
  )
}

export default AppLayout

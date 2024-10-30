import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Room from "./pages/Room"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

import "./App.css";
import AnswerBox from "./components/AnswerBox.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useAuthContext } from "./contexts/AuthContext";
import Question from "./components/Question.jsx";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const auth = useAuthContext();
  const isAuthenticated = auth.isAuthenticated();

  useEffect(() => {
    //get access to the html tag so we can change
    //the data-theme attribute.
    const html = document.querySelector("html");

    if (theme === "light") {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-between px-4 mx-auto font-display bg-base-100 h-screen overflow-hidden">
      <Header />

      {isAuthenticated ? (
        <form onSubmit={() => auth.logout()} className="btn-login">
          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </form>
      ) : (
        <form action="/auth/discord" className="btn-login">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}

      <main className="flex flex-col gap-4 items-center text-center font-body">
        <Question />
      </main>

      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;

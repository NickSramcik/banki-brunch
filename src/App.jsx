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
    <div className="flex flex-col items-center justify-between h-screen px-4 mx-auto overflow-hidden font-display bg-base-100"> 
      <Header /> 

      {isAuthenticated ? ( 
        <form onSubmit={() => auth.logout()} className="btn-login">
          <button type="submit" className="px-4 py-2 text-lg font-light tracking-widest text-white transition duration-300 ease-in-out border-2 rounded-lg bg-neutral border-accent hover:bg-base-200 active:bg-base-200 focus:outline-none hover:border-accent active:border-accent">
            Logout
          </button>
        </form>
      ) : (
        <form action="/auth/discord" className="btn-login">
          <button type="submit" className="px-4 py-2 text-lg font-light tracking-widest text-white transition duration-300 ease-in-out border-2 rounded-lg bg-neutral border-accent hover:bg-base-200 active:bg-base-200 focus:outline-none hover:border-accent active:border-accent">
            Login
          </button>
        </form>
      )} 

      <main className="flex flex-col items-center gap-4 text-center font-body">
        <Question />
      </main>

      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;

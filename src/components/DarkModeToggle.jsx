import { useState } from "react";
import Sun from "../assets/svg/darkMode/Sun";
import Moon from "../assets/svg/darkMode/Moon";

/**
 * @param {string} theme The value for the theme, "dark" || "light".
 * @param {function} setTheme The state setter function to set the theme.
 * @returns {JSX.Element}  Returns SVG for Moon or Sun depending on the theme.
 */
const DarkModeToggle = ({ theme, setTheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setIsAnimating(true);
    //set the state for animating to false after 2 seconds.
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    //set time out to add a slight delay so the spin on
    //the sun can turn once and pulse the moon one time.
    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("banki-theme", newTheme);
    }, 300);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-10 p-3 rounded-full bg-neutral text-neutral-content hover:bg-neutral-focus "
      >
        {theme === "dark" ? (
          <Sun
            fill="#FFCC33"
            className={`w-10 h-6 ${
              isAnimating &&
              "rotate-90 transition-transform duration-300 ease-in-out"
            } `}
          />
        ) : (
          <Moon
            fill="#E1EBF6"
            className={`w-10 h-10 text-primary  ${
              isAnimating &&
              "animate-pulse transition-transform duration-75 ease-in-out"
            }`}
          />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;

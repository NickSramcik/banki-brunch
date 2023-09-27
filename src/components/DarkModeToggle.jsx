import React from "react";
import Sun from "../assets/svg/darkMode/Sun";
import Moon from "../assets/svg/darkMode/moon";

const DarkModeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("banki-theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("banki-theme", "dark");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 p-3 rounded-full bg-neutral text-neutral-content hover:bg-neutral-focus hover:text-neutral-content"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;

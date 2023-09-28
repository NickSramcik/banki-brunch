import "../App.css";
import Github from "../assets/svg/GithubIcon";
import DarkModeToggle from "./DarkModeToggle";
function Footer({ theme, setTheme }) {
  return (
    <div className="bg-neutral justify-between h-10 flex items-center w-screen">
      <span>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </span>
      <footer className="bg-neutral">
        <a
          href="https://github.com/NickSramcik/banki-brunch"
          rel="noreferrer"
          target="_blank"
        >
          <Github
            className="w-12 h-8 p-1 rounded-full bg-neutral text-neutral-content hover:bg-neutral-focus"
            fill={theme === "dark" ? "#CC9763" : "#E1EBF6"}
          />
        </a>
      </footer>
    </div>
  );
}
export default Footer;

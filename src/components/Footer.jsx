import "../App.css";
import DarkModeToggle from "./DarkModeToggle";
function Footer({ theme, setTheme }) {
  return (
    <div className="bg-neutral justify-between h-10 flex items-center w-screen">
      <span>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </span>
      <footer className="bg-neutral p-2">
        <a
          href="https://github.com/NickSramcik/banki-brunch"
          rel="noreferrer"
          target="_blank"
          className="text-secondary hover:text-base-100 cursor-pointer"
        >
          Banki Brunch &copy; 100devs
        </a>
      </footer>
    </div>
  );
}
export default Footer;

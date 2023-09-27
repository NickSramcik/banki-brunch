import "../App.css";
import DarkModeToggle from "./DarkModeToggle";
function Footer({ theme, setTheme }) {
  return (
    <div className="bg-neutral justify-between h-10 flex items-center w-screen ">
      <footer className="bg-neutral">
        <DarkModeToggle
          dark={true}
          theme={theme}
          setTheme={setTheme}
        />
      </footer>
    </div>
  );
}
export default Footer;

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">NotePoint</div>

      <ul className="nav-links">
        <li>App Content</li>
        <li>Topics</li>
        <li>Interview Preparation</li>
        <li>About Us</li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;

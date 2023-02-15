import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Active Theme: {theme}
      <br />
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <br />
      <br />
    </div>
  );
}

export default Header;

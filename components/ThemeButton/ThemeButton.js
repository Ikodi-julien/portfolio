import { themeContext } from "../../context/theme-context";
import { useContext } from "react";

const ThemeButton = (props) => {
  const { isDark, setIsDark } = useContext(themeContext);

  return (
    <button onClick={() => setIsDark(!isDark)}>{isDark.toString()}</button>
  );
};
export default ThemeButton;

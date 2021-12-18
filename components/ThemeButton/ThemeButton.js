import { Fragment } from "react";
import { themeContext } from "../../context/theme-context";
import { useContext } from "react";
import { dark, light, shared } from "../../styled_components/themes/theme";

const ThemeButton = (props) => {
  const [theme, setTheme] = useContext(themeContext);

  return (
    <Fragment>
      <button onClick={() => setTheme({ ...dark, ...shared })}>Dark</button>
      <button
        onClick={() => {
          console.log("hé");
          setTheme({ ...light, ...shared });
        }}
      >
        Light
      </button>
    </Fragment>
  );
};
export default ThemeButton;

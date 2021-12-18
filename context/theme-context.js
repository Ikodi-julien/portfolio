import { createContext, useState } from "react";
import { dark, light, shared } from "../styled_components/themes/theme";

const themeContext = createContext();

function ThemeCtxProvider(props) {
  const darkTheme = { ...light, ...shared };

  const [theme, setTheme] = useState(darkTheme);
  // ici donner les valeurs en fonction de isDark

  return <themeContext.Provider value={[theme, setTheme]} {...props} />;
}
export { ThemeCtxProvider, themeContext };

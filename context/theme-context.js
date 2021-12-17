import { createContext, useContext, useState, useMemo } from "react";

const themeContext = createContext();

function ThemeCtxProvider(props) {
  const [isDark, setIsDark] = useState(true);

  return <themeContext.Provider value={{ isDark, setIsDark }} {...props} />;
}
export { ThemeCtxProvider, themeContext };

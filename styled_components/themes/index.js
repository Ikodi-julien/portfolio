import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../globalStyle";
import { themeContext } from "../../context/theme-context";

const Theme = ({ children }) => {
  const [theme] = useContext(themeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

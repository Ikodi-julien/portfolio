import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyle";
import darkTheme from "./dark";
import lightTheme from "./light";

const Theme = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;

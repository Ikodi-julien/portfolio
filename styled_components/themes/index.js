import { ThemeProvider } from "styled-components";
import GlobalStyles from "../globalStyle";

const Theme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

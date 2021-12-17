import { ThemeProvider } from "styled-components";
import GlobalStyles from "../globalStyle";
import themes from "./themes";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Wrapper } from "../styled_components/index";
import styled from "styled-components";
import Theme from "../styled_components/themes";
import { ThemeCtxProvider } from "../context/theme-context";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.font};
`;

const Layout = (props) => {
  return (
    <ThemeCtxProvider>
      <Theme>
        <StyledContainer>
          <Header />
          <Wrapper>{props.children}</Wrapper>
          <Footer />
        </StyledContainer>
      </Theme>
    </ThemeCtxProvider>
  );
};
export default Layout;

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Wrapper } from "../styled_components/index";
import styled from "styled-components";
import { ThemeCtxProvider } from "../context/theme-context";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.dark.pageBackground};
  color: ${({ theme }) => theme.dark.font};
`;

const Layout = (props) => {
  return (
    <ThemeCtxProvider>
      <StyledContainer>
        <Header />
        <Wrapper>{props.children}</Wrapper>
        <Footer />
      </StyledContainer>
    </ThemeCtxProvider>
  );
};
export default Layout;

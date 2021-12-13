import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Wrapper } from "../styled_components/index";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.pageBackground};
  color: ${({ theme }) => theme.colors.font};
`;

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </StyledContainer>
  );
};
export default Layout;

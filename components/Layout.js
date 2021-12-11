import Header from "./Header";
import Footer from "./Footer";
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
      <main>{children}</main>
      <Footer />
    </StyledContainer>
  );
};
export default Layout;

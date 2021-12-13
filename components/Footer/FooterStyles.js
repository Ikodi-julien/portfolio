import styled from "styled-components";

export const FooterWrapper = styled.section`
  padding: 4em;
  background: ${({ theme }) => theme.colors.footerBackground};
  display: flex;
  justify-content: space-between;
`;

export const FooterRow = styled.div`
  display: flex;
  font-size: 2em;
`;

export const FooterLink = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

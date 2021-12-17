import styled from "styled-components";

export const FooterWrapper = styled.section`
  padding: 6em;
  background: ${({ theme }) => theme.dark.footerBackground};
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakPoints.dt} {
    padding: 2em;
  }
  ${({ theme }) => theme.breakPoints.ip} {
    padding: 1em;
  }
  ${({ theme }) => theme.breakPoints.sp} {
    padding: 0.5em;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  font-size: 2em;
  flex-wrap: wrap;
`;

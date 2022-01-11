import styled from "styled-components";

export const FooterWrapper = styled.section`
  position: relative;
  padding: 6rem;
  background: ${({ theme }) => theme.footerBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.footerFontColor};

  ${({ theme }) => theme.breakPoints.dt} {
    padding: 2rem;
  }
  ${({ theme }) => theme.breakPoints.ip} {
    padding: 1rem;
  }
  ${({ theme }) => theme.breakPoints.sp} {
    padding: 0.5rem;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.footerFontColor};
    padding: 2rem 0;
  }
`;

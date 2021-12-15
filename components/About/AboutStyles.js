import styled from "styled-components";

export const TimelineContainer = styled.div`
  width: 55%;
  min-width: 300px;
  margin: 30px 0;
  & ul > li > div {
    font-size: 1em;
  }

  ${({ theme }) => theme.breakPoints.ip} {
    width: 90%;
    margin: 30px 0;
  }

  ${({ theme }) => theme.breakPoints.sp} {
    width: 100%;
    margin: 30px 0;
  }
`;

export const LogoAnimationContainer = styled.div.attrs((props) => ({
  id: "logoanimationcontainer",
}))`
  position: relative;
  margin-top: 100px;
  width: 400px;
  height: 400px;
  // border: 1px solid white;
`;

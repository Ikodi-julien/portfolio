import styled from "styled-components";

export const TimelineContainer = styled.div`
  width: 55%;
  min-width: 300px;
  margin: 30px 0;
  & ul > li > div {
    font-size: 1em;
  }

  ${({ theme }) => theme.breakPoints.ip} {
    width: 100%;
    margin: 30px 0;
  }

  ${({ theme }) => theme.breakPoints.sp} {
    margin: 30px 0;
  }
`;

export const LogoAnimationContainer = styled.div.attrs((props) => ({
  id: "logoanimationcontainer",
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // border: 1px solid white;

  ${({ theme }) => theme.breakPoints.ip} {
    flex-direction: row;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  min-height: 600px;
`;

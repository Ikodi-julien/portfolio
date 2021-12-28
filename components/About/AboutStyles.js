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

export const LogoAnimation = styled.div`
  position: relative;
  width: 250px;
  height: 280px;

  & img {
    transition: left 5s, top 5s;
  }
`;

export const LogoAnimationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // border: 1px solid white;

  ${({ theme }) => theme.breakPoints.ip} {
    flex-direction: row;
    width: 100%;
  }
`;

export const LogoAnimationDivider = styled.hr`
  width: 70%;
  margin: 15px auto;
  height: 3px;
  background: ${({ theme }) => theme.titleBackground};
  border-radius: 2px;
`;

export const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
`;

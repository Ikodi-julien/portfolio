import styled from "styled-components";
import HeroAnimation from "./HeroAnimation";

export const StyledHeroAnimation = styled(HeroAnimation)`
  width: 100%;
  height: 30vh;
  position: relative;
  z-index: -1;
  display: "block";
`;

export const HeroTitles = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
  height: 100%;
  // text-shadow: 0 0 5px ${({ theme }) => theme.fontInverted};
`;

export const MainTitle = styled.h1`
  font-size: 4em;
  text-align: left;
  width: fit-content;
  background: ${({ theme }) => theme.titleBackground};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.h2`
  font-size: 2em;
  text-align: left;
  display: flex;
  width: fit-content;
  background: ${({ theme }) => theme.titleBackground};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

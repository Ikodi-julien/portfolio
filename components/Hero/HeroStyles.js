import styled from "styled-components";
import HeroAnimation from "./HeroAnimation";

export const StyledHeroAnimation = styled(HeroAnimation)`
  width: 100%;
  height: 30vh;
  position: relative;
  z-index: -1;
  display: "block";
`;

export const HeroTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MainTitle = styled.h1`
  font-size: 4em;
  text-align: left;
  color: inherit;
`;

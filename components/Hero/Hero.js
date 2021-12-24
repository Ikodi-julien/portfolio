import { Section, IconContainer } from "/styled_components";
import { FaLinkedin, FaGithubSquare, FaRecordVinyl } from "react-icons/fa";
import {
  StyledHeroAnimation,
  HeroTitles,
  MainTitle,
  SubTitle,
} from "./HeroStyles";

const Hero = (props) => {
  return (
    <Section>
      <HeroTitles>
        <MainTitle>Portfolio</MainTitle>
        <SubTitle>Julien PELLIN</SubTitle>
        <SubTitle>Développeur d&apos;applications pour le web</SubTitle>
        <SubTitle>
          <IconContainer>
            <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
              <FaLinkedin />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://github.com/ikodi-julien">
              <FaGithubSquare />
            </a>
          </IconContainer>
        </SubTitle>
      </HeroTitles>
      <StyledHeroAnimation />
    </Section>
  );
};
export default Hero;

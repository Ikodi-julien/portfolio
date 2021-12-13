import { Section, IconLink } from "/styled_components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
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
        <SubTitle>
          <IconLink>
            <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
              <FaLinkedin />
            </a>
          </IconLink>
          <IconLink>
            <a href="https://github.com/ikodi-julien">
              <FaGithubSquare />
            </a>
          </IconLink>
        </SubTitle>
      </HeroTitles>
      <StyledHeroAnimation />
    </Section>
  );
};
export default Hero;

import { Title, Section } from "/styled_components";
import { StyledHeroAnimation, HeroTitle, MainTitle } from "./HeroStyles";

const Hero = (props) => {
  return (
    <Section>
      <HeroTitle>
        <MainTitle>Portfolio - Julien PELLIN</MainTitle>
        <Title>Bienvenue</Title>
      </HeroTitle>
      <StyledHeroAnimation />
    </Section>
  );
};
export default Hero;

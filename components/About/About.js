import { useEffect } from "react";
import { Section, Text } from "../../styled_components";
import Title from "../../styled_components/Title";
import {
  TimelineContainer,
  LogoAnimation,
  LogoAnimationContainer,
  LogoAnimationDivider,
  AboutRow,
} from "./AboutStyles";
import Timeline1 from "./TimeLine1";
import Timeline2 from "./TimeLine2";
import { createLogoAnimation, logosDev, logosPast } from "./logoAnimation";

const About = ({}) => {
  useEffect(() => {
    createLogoAnimation(logosDev, "logoanimation1");
    createLogoAnimation(logosPast, "logoanimation2");
  }, []);

  return (
    <Section>
      <Title title="Mon parcours" id="about" />
      <Text>
        Developpeur d’applications pour le web depuis 2019, j’ai aussi une
        expérience dans les secteurs de la santé et de l’industrie
      </Text>
      <AboutRow>
        <TimelineContainer>
          <Timeline1 />
        </TimelineContainer>
        <LogoAnimationContainer>
          <LogoAnimation id="logoanimation1" />
        </LogoAnimationContainer>
      </AboutRow>
      <LogoAnimationDivider />
      <AboutRow>
        <TimelineContainer>
          <Timeline2 />
        </TimelineContainer>
        <LogoAnimationContainer>
          <LogoAnimation id="logoanimation2" />
        </LogoAnimationContainer>
      </AboutRow>
    </Section>
  );
};
export default About;

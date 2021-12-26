import { useEffect } from "react";
import { Section, Text } from "../../styled_components";
import Title from "../../styled_components/Title";
import {
  TimelineContainer,
  LogoAnimationContainer,
  AboutRow,
} from "./AboutStyles";
import Timeline from "./TimeLine";
import { createLogoAnimation, logosDev, logosPast } from "./logoAnimation";

const About = ({}) => {
  useEffect(() => {
    createLogoAnimation(logosDev);
    createLogoAnimation(logosPast);
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
          <Timeline />
        </TimelineContainer>
        <LogoAnimationContainer />
      </AboutRow>
    </Section>
  );
};
export default About;

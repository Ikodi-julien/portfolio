import { useEffect } from "react";
import { Section, Text, Row } from "../../styled_components";
import Title from "../../styled_components/Title";
import { TimelineContainer, LogoAnimationContainer } from "./AboutStyles";
import Timeline from "./TimeLine";
import { logoAnimation } from "./logoAnimation";

const About = ({}) => {
  useEffect(() => logoAnimation(), []);

  return (
    <Section>
      <Title title="Parcours pro" id="about" />
      <Text>
        Developpeur d’applications pour le web depuis 2019, j’ai aussi une
        expérience dans les secteurs de la santé et de l’industrie
      </Text>
      <Row>
        <TimelineContainer>
          <Timeline />
        </TimelineContainer>
        <LogoAnimationContainer />
      </Row>
    </Section>
  );
};
export default About;

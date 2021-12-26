import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section, Text, Row } from "../../styled_components";
import Title from "/styled_components/Title";
import Button from "/styled_components/Button";
import AppTech from "./AppTech";
import {
  AppDetailsMainTitle,
  AppTechsContainer,
  AppDetailsHero,
} from "./AppDetailsStyles";

const AppDetails = ({ appDetails }) => (
  <Section>
    <AppDetailsHero>
      <AppDetailsMainTitle>{appDetails.name}</AppDetailsMainTitle>
      <Image
        src={appDetails.imgUrl[0]}
        alt={appDetails.title}
        width={600}
        height={400}
      />
    </AppDetailsHero>
    <Row justifyContent="right">
      <a>
        <Button color="primary">
          {appDetails.name.toLowerCase()}.ikodi.eu{" "}
          <FaExternalLinkAlt
            style={{ fontSize: "1.2em", marginLeft: "0.5em" }}
          />
        </Button>
      </a>
      <a href={appDetails.links.github}>
        <Button color="secondary">
          <FaGithub style={{ fontSize: "1.2em" }} />
        </Button>
      </a>
    </Row>
    <Title title="Son Histoire" />
    <Text>{appDetails.desc}</Text>
    <Title title="Fonctionnalités" />
    <ul>
      {appDetails.features.map((feature, i) => (
        <li key={i}>
          <Text>{feature}</Text>
        </li>
      ))}
    </ul>

    <Title title="Stack technique" />
    <AppTechsContainer>
      <AppTech tech={appDetails.techno.backend} title="Backend" />
      <AppTech tech={appDetails.techno.frontend} title="Frontend" />
      <AppTech tech={appDetails.techno.deployment} title="Déploiement" />
    </AppTechsContainer>
  </Section>
);
export default AppDetails;

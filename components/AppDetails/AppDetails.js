import Image from "next/image";
import { Section, Text } from "../../styled_components";
import Title from "/styled_components/Title";
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

import { Section, Text } from "../../styled_components";
import { TechsContainer } from "./TechStyles";
import Techno from "./Techno";
import Title from "../../styled_components/Title";

const techList = [
  {
    title: "Backend",
    icon: "FaServer",
    desc: [`Laravel, Node`, `Bases de données SQL et NoSQL.`],
  },
  {
    title: "Frontend",
    icon: "FaReact",

    desc: ["React-Redux, scss"],
  },
  {
    title: "Déploiement / Hébergement",
    icon: "FaAws",
    desc: [
      "AWS / Ubuntu/ Nginx / Docker / Gitlab",
      "Heroku, DigitalOcean, PlanetHoster, Gandi...",
    ],
  },
  {
    title: "UX/UI",
    icon: "FaUsers",
    desc: [
      "Certifié Opquast (890/1000).",
      "Whimsical pour les wireframes et GIMP pour la retouche d'images, le design n'est pas ma spécialité.",
    ],
  },
  {
    title: "Sécurité",
    icon: "FaLock",
    desc: [
      "Les principales failles de sécurité sont prises en compte dans les projets :",
      "- L’injection SQL par le contrôle de conformité et le nettoyage des données avant insertion en base de données,",
      "- Le cross Site Scripting par l’utilisation de token d’authentification inaccessibles par un script dans le navigateur.",
    ],
  },
];

const Technos = () => {
  return (
    <Section>
      <Title title="Technos" id="tech" />

      <TechsContainer>
        {/* ---- CARD --- */}
        {techList.map((tech, index) => (
          <Techno key={index} techno={tech} />
        ))}
      </TechsContainer>
    </Section>
  );
};
export default Technos;

import { Section, Title, ButtonRow } from "../../styled_components";
import Button from "../../styled_components/Button";
import { StyledTag } from "../Tag/TagStyles";
import { TagContainer } from "../Tag/TagStyles";
import {
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectText,
  ProjectLink,
} from "./ProjectsStyles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { appList } from "../../database/appList";

const bak = [
  {
    title: "Multiplicorne",
    imgUrl: "/assets/multiplicorne_portfolio.png",
    alt: "Exemple d'une page multiplicorne",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magni, corrupti unde doloremque iste illo!",
  },
  {
    title: "Concord",
    imgUrl: "/assets/concord-portefolio.png",
    alt: "Exemple d'une page de Concord",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magni, corrupti unde doloremque iste illo!",
  },
  {
    title: "Chronofit",
    imgUrl: "/assets/chronofit-v2.png",
    alt: "Vues de l'app Chronofit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magni, corrupti unde doloremque iste illo!",
  },
  {
    title: "auth.ikodi",
    imgUrl: "/assets/auth-hero.png",
    alt: "Vues de l'app d'authentification",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magni, corrupti unde doloremque iste illo!",
  },
];
const Projects = (props) => {
  return (
    <Section id="projects">
      <Title>Projects</Title>

      <ProjectsContainer>
        {/* ---- CARD --- */}
        {appList.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <Image
              src={project.imgUrl[0]}
              alt={project.title}
              width={250}
              height={150}
            />
            <ProjectText>{project.desc}</ProjectText>
            <TagContainer>
              {project.techno.frontend.lang.map((lang) => (
                <StyledTag key={lang} text={lang} />
              ))}
              {project.techno.backend.lang.map((lang) => (
                <StyledTag key={lang} text={lang} />
              ))}
              {project.techno.backend.db.map((db) => (
                <StyledTag key={db} text={db} />
              ))}
            </TagContainer>
            <ButtonRow>
              <Button color="primary">
                <FaExternalLinkAlt
                  style={{ fontSize: "1.2em", marginRight: "1em" }}
                />
                {project.name}
              </Button>
              <Button color="secondary">
                <FaGithub style={{ fontSize: "1.2em" }} />
              </Button>
            </ButtonRow>
            <ProjectLink>
              <em>
                <Link href={"/details"} passHref>
                  Voir la description détaillée
                </Link>
              </em>
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Section>
  );
};
export default Projects;

import { useRouter } from "next/router";
import { Row } from "../../styled_components";
import Button from "../../styled_components/Button";
import { StyledTag } from "../Tag/TagStyles";
import { TagContainer } from "../Tag/TagStyles";
import {
  ProjectCard,
  ProjectTitle,
  ProjectText,
  ProjectLink,
} from "./ProjectsStyles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  const router = useRouter();
  const handleClick = () => {
    console.log("hé");
    router.push(`/${project.name}`);
  };

  return (
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
      <Row>
        <Button color="primary" onClick={handleClick}>
          <FaExternalLinkAlt
            style={{ fontSize: "1.2em", marginRight: "1em" }}
          />
          {project.name}
        </Button>
        <Button color="secondary">
          <FaGithub style={{ fontSize: "1.2em" }} />
        </Button>
      </Row>
      <ProjectLink>
        <em>
          <Link href={"/details"} passHref>
            Voir la description détaillée
          </Link>
        </em>
      </ProjectLink>
    </ProjectCard>
  );
};
export default Project;

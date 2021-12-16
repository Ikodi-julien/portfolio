import { useRouter } from "next/router";
import { Row } from "../../styled_components";
import Button from "../../styled_components/Button";
import { StyledTag, TagContainer } from "../Tag/TagStyles";
import {
  ProjectCard,
  ProjectText,
  ProjectLink,
  ProjectTitle,
} from "./ProjectsStyles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${project.name}`);
  };

  return (
    <ProjectCard key={project.title}>
      <ProjectTitle>{project.name}</ProjectTitle>

      <div style={{ cursor: "pointer" }}>
        <Image
          src={project.imgUrl[0]}
          alt={project.title}
          width={250}
          height={150}
          onClick={handleClick}
        />
      </div>
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
          + Détails
        </Button>
        <a href={project.links.github}>
          <Button color="secondary">
            <FaGithub style={{ fontSize: "1.2em" }} />
          </Button>
        </a>
      </Row>
      <ProjectLink>
        <em>
          <Link
            href={`https://${project.name.toLowerCase()}.ikodi.eu`}
            passHref
          >
            <a>
              {project.name.toLowerCase()}.ikodi.eu{" "}
              <FaExternalLinkAlt
                style={{ fontSize: "1.2em", marginLeft: "0.5em" }}
              />
            </a>
          </Link>
        </em>
      </ProjectLink>
    </ProjectCard>
  );
};
export default Project;

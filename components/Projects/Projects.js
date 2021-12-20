import { Section } from "../../styled_components";
import Title from "../../styled_components/Title";
import Project from "./Project";
import { ProjectsContainer } from "./ProjectsStyles";
import { appList } from "../../database/appList";

const Projects = (props) => {
  return (
    <Section id="projects">
      <Title title="Projects" id="projects" />

      <ProjectsContainer>
        {/* ---- CARD --- */}
        {appList.map((project, index) => (
          <Project key={index} project={project} slug={props.slug} />
        ))}
      </ProjectsContainer>
    </Section>
  );
};
export default Projects;

import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ProjectCard = styled.article`
  width: 300px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 20px 1px rgba(255, 255, 255, 0.12);
  margin: 20px 10%;
  background: ${({ theme }) => theme.colors.cardBackground};
`;

export const ProjectTitle = styled.h1`
  font-size: 2em;
  margin: 0.5em 0;
`;

export const ProjectText = styled.p`
  font-size: 1em;
  margin: 1em 0;
`;

export const ProjectLink = styled.div`
  font-style: italic;
  font-weight: 600;
  margin: 8px 0;
  transform: scale(1);
  transition: all 300ms;

  &:hover {
    transform: scale(1.05);
    transition: all 300ms;
  }
`;

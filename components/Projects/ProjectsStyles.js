import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ProjectCard = styled.article`
  width: 40%;
  max-width: 450px;
  min-width: 280px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
  margin: 20px 5%;
  background: ${({ theme }) => theme.colors.cardBackground};

  ${({ theme }) => theme.breakPoints.dt} {
    margin: 20px 3%;
    padding: 8px;
  }

  ${({ theme }) => theme.breakPoints.sp} {
    padding: 8px;
  }
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
  font-size: 1.2em;
  width: 100%;
  text-align: center;
  padding: 1em 0;
  transform: scale(1);
  transition: all 300ms;

  &:hover {
    transform: scale(1.01);
    transition: all 300ms;
  }
`;

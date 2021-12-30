// /* Smartphones (portrait) ----------- */
// sp: "@media screen and (max-width : 380px)",
// /* iPads ----------- */
// ip: "@media screen and (max-width : 768px)",
// /* Desktops and laptops ----------- */
// dt: "@media screen and (max-width : 1224px)",
// /* Large screens ----------- */
// ls: "@media screen and (max-width : 1824px)",
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ProjectCard = styled.article`
  width: 25%;
  min-width: 300px;
  max-width: 400px
  flex: 1;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
  margin: 20px 2%;
  background: ${({ theme }) => theme.cardBackground};

  ${({ theme }) => theme.breakPoints.dt} {
    margin: 20px 1.5%;
  min-width: 260px;
}
  ${({ theme }) => theme.breakPoints.ip} {
    margin: 20px 1%;
  min-width: 240px;
}
${({ theme }) => theme.breakPoints.sp} {
  margin: 20px 5px;
min-width: 300px;
}
`;

export const ProjectTitle = styled.h1`
  font-size: 2em;
  width: fit-content;
  margin: 0.5em 0;
  background: ${({ theme }) => theme.titleBackground};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProjectText = styled.p`
  font-size: 1em;
  margin: 1em 0;
`;

import styled from "styled-components";

export const TechsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const TechCard = styled.article`
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
  margin: 30px 3%;
  background: ${({ theme }) => theme.cardBackground};
`;

export const TechTitle = styled.h1`
  font-size: 1.5em;
  margin: 0.5em 0;
`;

export const TechText = styled.p`
  font-size: 1em;
  margin: 1em 0;
`;

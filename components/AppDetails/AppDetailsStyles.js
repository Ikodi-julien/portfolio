import styled from "styled-components";

export const AppDetailsHero = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2em 0;
`;

export const AppDetailsMainTitle = styled.h1`
  font-size: 3em;
`;

export const AppTechCard = styled.article`
  width: 280px;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.cardBackground};
  margin-right: 1em;
  margin-bottom: 1em;

  ${({ theme }) => theme.breakPoints.sp} {
    margin-right: 0;
  }
`;
export const AppTechTitle = styled.h1`
  margin-top: 0;
  font-size: 1.8em;
`;
export const AppTechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

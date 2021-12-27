import styled from "styled-components";

export const TechsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const TechCard = styled.article`
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
  margin: 30px 3%;
  background: ${({ theme }) => theme.cardBackground};

  ${({ theme }) => theme.breakPoints.ip} {
    width: 170px;
    padding: 10px;
    margin: 25px 2%;
  }

  ${({ theme }) => theme.breakPoints.sp} {
    width: 140px;
    padding: 5px;
    margin: 20px 2%;
  }
`;

export const TechTitle = styled.h1`
  font-size: 1.5em;
  margin: 0.5em 0;

  ${({ theme }) => theme.breakPoints.ip} {
    font-size: 1.2em;
  }
`;

export const TechText = styled.p`
  font-size: 1em;
  margin: 1em 0;
`;

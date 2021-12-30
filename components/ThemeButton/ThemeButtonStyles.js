import styled from "styled-components";

export const ThemeButtonContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  padding: 8px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 500ms;

  &:hover {
    transform: scale(1.2);
  }
`;

import styled from "styled-components";
import Tag from "./Tag";

export const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTag = styled(Tag)`
  font-size: 0.8em;
  padding: 4px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

import styled from "styled-components";
import Tag from "./Tag";

export const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
`;

export const StyledTag = styled(Tag)`
  font-size: 0.8em;
  padding: 4px;
  margin: 5px;
  // border: 1px solid ${({ theme }) => theme.dark.secondary};
  background: ${({ theme }) => theme.dark.secondary};
  font-weight: 600;
  border-radius: 4px;
`;

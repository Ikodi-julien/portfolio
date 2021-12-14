import { Divider } from ".";
import styled from "styled-components";

const Title = ({ title, id, className }) => (
  <div id={id} className={className}>
    <Divider />
    <h2>{title}</h2>
  </div>
);

export const StyledTitle = styled(Title)`
  text-align: left;
  color: ${({ theme }) => theme.colors.font};
  margin-bottom: 1em;
  padding-top: 60px;
  & h2 {
    font-size: 3em;
  }
`;
export default StyledTitle;

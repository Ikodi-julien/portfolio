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
  color: ${({ theme }) => theme.font};
  margin-bottom: 3em;
  padding-top: 60px;

  & h2 {
    font-size: 2.5em;
    width: fit-content;
    background: ${({ theme }) => theme.titleBackground};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${({ theme }) => theme.breakPoints.sp} {
      font-size: 2em;
    }
  }
`;
export default StyledTitle;

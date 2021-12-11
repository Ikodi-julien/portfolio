import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
`;

export const Button = styled.button`
  font-size: 1em;
  font-weight: 600;
  margin: ${(props) => (props.nomargin ? "0" : ".5em")};
  padding: ${(props) => (props.nopadding ? "0" : "0.5em 1em")};
  border-radius: 15px;
  color: ${(props) =>
    props.invert ? props.theme.colors.fontInverted : props.theme.colors.font};
  background: ${(props) =>
    props.invert
      ? props.theme.colors.buttonBackInverted
      : props.theme.colors.buttonBack};
  border: none;
`;

import styled from "styled-components";

const btnBR = 15;
// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.main`
  padding: 4em;
`;

export const ButtonBack = styled.div`
  background: ${({ theme }) => theme.colors.font};
  padding: 2px;
  margin: ${(props) => (props.nomargin ? "0" : ".5em")};
  border-radius: ${btnBR + 2}px;
  overflow: hidden;
  width: fit-content;
`;

export const ButtonFront = styled.button`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  padding: ${(props) => (props.nopadding ? "0" : "0.5em 1em")};
  color: ${(props) =>
    props.invert ? props.theme.colors.fontInverted : props.theme.colors.font};
  background: ${(props) =>
    props.invert
      ? props.theme.colors.buttonBackInverted
      : props.theme.colors.buttonBack};
  border-radius: ${btnBR}px;
  border: none;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  height: 35px;
  padding: 5px;
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

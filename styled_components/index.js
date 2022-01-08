import styled from "styled-components";

const btnBR = 15;

export const Section = styled.section`
  position: relative;
  margin-bottom: 2em;
`;

export const Wrapper = styled.main`
  padding: 7em;

  ${({ theme }) => theme.breakPoints.dt} {
    padding: 4em 3em;
  }
  ${({ theme }) => theme.breakPoints.ip} {
    padding: 4em 1em;
  }
  ${({ theme }) => theme.breakPoints.sp} {
    padding: 4em 0.5em;
  }
`;

export const ButtonBack = styled.div`
  background: ${({ theme }) => theme.buttonBorder};
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
    props.invert ? props.theme.fontInverted : props.theme.font};
  background: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.buttonBack};
  border-radius: ${btnBR}px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.linkHovered};
  }
`;

export const LogoContainer = styled.div`
  & img {
    background: rgba(255, 255, 255, 0.2);
  }

  ${({ theme }) => theme.breakPoints.dt} {
    display: none;
  }
`;

export const Divider = styled.hr`
  width: ${(props) => (props.width ? props.width : "20%")};
  min-width: 120px;
  height: ${(props) => (props.height ? props.height : "10px")};
  border-radius: 5px;
  background: ${({ theme }) => theme.buttonBack};
  border: none;
  margin: 10px 0;
`;

export const IconContainer = styled.div`
  position: ${(props) => (props.position ? props.position : "relative")};
  right: ${(props) => (props.right ? props.right : "")};
  padding: ${(props) => (props.padding ? props.padding : "1rem 0")};
  margin: ${(props) => (props.margin ? props.margin : "0 1rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "left"};
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-evenly"};
  align-items: center;
  flex-wrap: wrap;
`;

export const Text = styled.p`
  font-size: ${(props) => (props.fontSize ? props.margin : "1.3em")};
  position: relative;
  margin-bottom: 0.5em;

  ${({ theme }) => theme.breakPoints.ip} {
    font-size: ${(props) => (props.fontSize ? props.margin : "1.1em")};
  }
  ${({ theme }) => theme.breakPoints.sp} {
    font-size: ${(props) => (props.fontSize ? props.margin : "1em")};
  }
`;

export const StyledLinkContainer = styled.div`
  font-style: italic;
  font-weight: 600;
  font-size: 1.2em;
  width: fit-content;
  max-width: 100%;
  padding: 0.5em 1em;
  margin: ${(props) => (props.margin ? props.margin : "1em auto")};
  text-align: center;
  transform: scale(1);
  transition: transform 300ms;
  border: 2px solid ${({ theme }) => theme.font};
  border-radius: 20px;

  ${({ theme }) => theme.breakPoints.ip} {
    font-size: 1em;
  }

  & a {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    word-break: normal;
  }
  &:hover {
    transform: scale(1.02);
    transition: transform 300ms;
  }
`;

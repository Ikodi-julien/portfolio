import styled from "styled-components";

const btnBR = 15;

export const Title = styled.h2`
  font-size: 2em;
  text-align: left;
  color: inherit;
`;
export const Section = styled.section`
  position: relative;
`;

export const Wrapper = styled.main`
  padding: 8em;

  ${({ theme }) => theme.breakPoints.dt} {
    padding: 4em;
  }
  ${({ theme }) => theme.breakPoints.ip} {
    padding: 2em;
  }
  ${({ theme }) => theme.breakPoints.sp} {
    padding: 1em;
  }
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

  ${({ theme }) => theme.breakPoints.ip} {
    display: none;
  }
`;

export const Divider = styled.hr`
  width: 20%;
  min-width: 120px;
  height: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.buttonBack};
  border: none;
  margin: 10px 0;
`;

import styled from "styled-components";

const btnBR = 15;

export const Section = styled.section`
  position: relative;
  margin-bottom: 2em;
`;

export const Wrapper = styled.main`
  padding: 8em;

  ${({ theme }) => theme.breakPoints.dt} {
    padding: 4em;
  }
  ${({ theme }) => theme.breakPoints.ip} {
    padding: 4em 2em;
  }
  ${({ theme }) => theme.breakPoints.sp} {
    padding: 4em 1em;
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

  &:hover {
    background-color: ${({ theme }) => theme.linkHovered};
  }
`;

export const LogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  height: 35px;
  padding: 5px;
  border-radius: 5px;

  ${({ theme }) => theme.breakPoints.dt} {
    display: none;
  }
`;

export const Divider = styled.hr`
  width: 20%;
  min-width: 120px;
  height: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.buttonBack};
  border: none;
  margin: 10px 0;
`;

export const IconLink = styled.div`
  padding: 1rem 0;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const Text = styled.p`
  font-size: 1.1em;
  position: relative;
`;

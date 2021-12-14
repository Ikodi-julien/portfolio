import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.pageBackground};
  align-items: center;
  padding: 5px 5%;
  z-index: 10;
`;

export const NavLinks = styled.ul`
  position: relative;
  display: flex;

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 50px;
    left: ${(props) => (props.isVisible ? 0 : "-200vw")};
    transition: left 300ms;
    display: block;
    padding: 50px 20px;
    width: 100%;
    background-color: black;
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const NavLink = styled.li`
  font-size: 1.2em;
  padding: 1rem;
  cursor: pointer;
  margin: 0 10px;
  font-weight: 400;
`;

export const Burger = styled(FaEllipsisV)`
  margin-right: 10px;
  font-size: 1.5em;
  color: white;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

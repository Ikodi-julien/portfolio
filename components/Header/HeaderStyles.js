import styled from "styled-components";
import NavSup from "./NavSup";
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
  padding: 0 5%;
  z-index: 10;
`;

export const NavLinks = styled.ul`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.pageBackground};

  ${({ theme }) => theme.breakPoints.ip} {
    position: absolute;
    top: 50px;
    left: ${(props) => (props.isVisible ? 0 : "-200vw")};
    height: fit-content;
    transition: left 300ms;
    display: block;
    padding: 50px 15px;
    width: 100%;
    background-color: black;
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const NavLink = styled.li`
  font-size: 1.2em;
  padding: 1em;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.pageBackground};

  ${({ theme }) => theme.breakPoints.ip} {
    padding: 0;
    height: 2em;
    cursor: pointer;
    font-weight: 400;
    background-color: black;
  }
`;

export const NavSupContainer = styled.ul`
  position: relative;
`;

export const StyledNavSup = styled(NavSup)`
  position: absolute;
  display: block;
  background-color: ${({ theme }) => theme.colors.pageBackground};
  top: ${(props) => (props.open ? "60px" : "-200px")};
  right: 0;
  z-index: -1;
  transition: top 300ms;

  @media screen and (max-width: 900px) {
    display: block;
    background-color: black;
    top: 50px;
    right: ${(props) => (props.open ? "0" : "-200px")};
    z-index: 1;
    transition: right 300ms;
  }
`;

export const Burger = styled(FaEllipsisV)`
  margin-right: 10px;
  font-size: 1.5em;
  color: white;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

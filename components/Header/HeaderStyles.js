// /* Smartphones (portrait) ----------- */
// sp: "@media screen and (max-width : 380px)",
// /* iPads ----------- */
// ip: "@media screen and (max-width : 768px)",
// /* Desktops and laptops ----------- */
// dt: "@media screen and (max-width : 1224px)",
// /* Large screens ----------- */
// ls: "@media screen and (max-width : 1824px)",

import styled from "styled-components";
import NavSup from "./NavSup";
import { FaEllipsisV } from "react-icons/fa";
import UserGreating from "./UserGreating";

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.pageBackground};
  align-items: center;
  padding: 0 5%;
  z-index: 10;

  ${({ theme }) => theme.breakPoints.dt} {
    padding: 0;
  }
  ${({ theme }) => theme.breakPoints.ip} {
    padding: 0 5%;
  }
`;

export const NavLinks = styled.ul`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme }) => theme.pageBackground};

  ${({ theme }) => theme.breakPoints.ip} {
    background-color: ${({ theme }) => theme.navBackground};
    position: absolute;
    top: 50px;
    left: ${(props) => (props.isVisible ? 0 : "-200vw")};
    height: fit-content;
    transition: left 300ms;
    display: block;
    padding: 50px 15px;
    width: 100%;
    color: ${({ theme }) => theme.font};
  }
`;

export const NavLink = styled.li`
  font-size: 1.2em;
  padding: 1em;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  background-color: ${({ theme }) => theme.pageBackground};
  transition: background-color 500ms;

  &:hover {
    background-color: rgba(63, 112, 203, 0.2);
  }
  ${({ theme }) => theme.breakPoints.ip} {
    background-color: ${({ theme }) => theme.navBackground};
    padding: 8px;
    height: 2em;
    cursor: pointer;
    font-weight: 400;
  }
`;

export const NavSupContainer = styled.ul`
  position: relative;
`;

export const StyledNavSup = styled(NavSup)`
  position: absolute;
  display: block;
  background-color: ${({ theme }) => theme.pageBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  top: ${(props) => (props.open ? "60px" : "-200px")};
  right: 0;
  z-index: -1;
  transition: top 300ms;

  ${({ theme }) => theme.breakPoints.ip} {
    background-color: ${({ theme }) => theme.navBackground};
    top: 60px;
    right: ${(props) => (props.open ? "2px" : "-200px")};
    z-index: 1;
    transition: right 300ms;
  }
`;

export const Burger = styled(FaEllipsisV)`
  display: none;
  margin-right: 10px;
  font-size: 1.5em;
  color: ${({ theme }) => theme.font};

  ${({ theme }) => theme.breakPoints.ip} {
    display: block;
  }
`;

export const UserButton = styled.div`
  position: absolute;
  top: 110px;
  right: 0;
  padding: 5px;
  font-size: 1.2em;
  transform: scale(1);
  transition: transform 500ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledUserGreating = styled(UserGreating)`
  position: absolute;
  width: 320px;
  padding: 15px;
  top: 60px;
  right: ${(props) => (props.open ? "10px" : "-1000px")};
  transition: right 300ms;
  font-weight: bold;
  background-color: ${({ theme }) => theme.pageBackground};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};

  & p {
    font-weight: normal;
  }
  & table {
    font-size: 0.8em;
    margin: auto;
    margin-bottom: 20px;

    tr {
      background: ${({ theme }) => theme.font};
      color: ${({ theme }) => theme.pageBackground};
    }
    td,
    th {
      padding: 5px 10px;
    }
    td.break {
      word-break: break-all;
    }
  }
`;

export const UserGreatingFooter = styled.footer`
  width: fit-content;
  margin: auto;
`;

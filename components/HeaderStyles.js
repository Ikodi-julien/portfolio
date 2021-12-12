import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const NavLinks = styled.ul`
  display: flex;

  @media screen and (max-width: 900px) {
    display: none;
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

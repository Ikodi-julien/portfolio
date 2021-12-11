import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.ul`
  display: flex;
`;

export const NavLink = styled.li`
  padding: 1rem;
  cursor: pointer;
  margin: 0 10px;
  font-weight: 600;
`;

import styled from "styled-components";

export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 15, 37, 0.6);
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 350px;
  font-size: 1.2em;
  background-color: ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.font};
  border: 2px solid white;
  border-radius: 5px;
  padding: 1em;
  z-index: 1;
`;

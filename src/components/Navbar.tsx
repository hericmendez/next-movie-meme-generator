import { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background: #111;
  padding: 20px;
  transition: left 0.3s ease-in-out;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 10px 0;
    color: white;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarContainer>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
        <Logo>Filmes</Logo>
        <NavLinks>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </NavLinks>
      </NavbarContainer>

      <Sidebar isOpen={isOpen}>
        <ul>
          <li onClick={() => setIsOpen(false)}>Home</li>
          <li onClick={() => setIsOpen(false)}>Sobre</li>
          <li onClick={() => setIsOpen(false)}>Contato</li>
        </ul>
      </Sidebar>
    </>
  );
}

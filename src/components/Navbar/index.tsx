import React, { FC, useState } from "react";
import {
  NavbarContainer,
  Logo,
  MenuButton,
  Sidebar,
  CloseButton,
  Footer,
  FooterIcons,
  FooterText,
  IconButton,
} from "./styles";
import { GitHub, Facebook, LinkedIn, Email } from "@mui/icons-material";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("isOpen ==> ", isOpen);

  return (
    <>
      <NavbarContainer>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
        <Logo>MOVIE MEME GENERATOR</Logo>
        {/*         <NavLinks>
          <li></li>
          <li>

            <ToggleBtn />
          </li>
          <li>
            <ToggleBtn />
          </li>
        </NavLinks> */}
      </NavbarContainer>

      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(!isOpen)}>×</CloseButton>
        <ul>
          {/*           <ToggleContainer>
            {" "}
            <ToggleBtn />
            Dark mode
          </ToggleContainer>
          <ToggleContainer>
            {" "}
            <ToggleBtn />
            Language
          </ToggleContainer> */}
          <li onClick={() => setIsOpen(!isOpen)}>Sobre</li>
          <li onClick={() => setIsOpen(!isOpen)}>Contato</li>
        </ul>
        <hr />
        <Footer>
          <FooterText>
            <span>Footer description here</span>
            <span>© 2011 John Doe</span>
          </FooterText>

          <FooterIcons>
            <IconButton>
              <GitHub color="secondary" />
            </IconButton>
            <IconButton>
              <Facebook color="secondary" />
            </IconButton>
            <IconButton>
              <LinkedIn color="secondary" />
            </IconButton>
            <IconButton>
              <Email color="secondary" />
            </IconButton>
          </FooterIcons>
        </Footer>
      </Sidebar>
    </>
  );
};

export default Navbar;

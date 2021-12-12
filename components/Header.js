/* eslint-disable @next/next/link-passhref */
import Button from "../styled_components/Button";
import { LogoContainer } from "../styled_components";
import { Container, NavLinks, NavLink, Burger } from "./HeaderStyles";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo_ikodi_lettres.png";

const Header = (props) => {
  return (
    <Container>
      <Burger />

      <LogoContainer>
        <Image src={Logo} alt="Logo Ikodi" width={100} height={25} />
      </LogoContainer>

      <NavLinks>
        <Link href="/">
          <NavLink>
            <FaHome />
          </NavLink>
        </Link>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
        <Link href="#tech">
          <NavLink>Technos</NavLink>
        </Link>
        <Link href="#about">
          <NavLink>Mon parcours</NavLink>
        </Link>
        <Link href="https://ikodi.eu/blog">
          <NavLink>Blog</NavLink>
        </Link>
        <Link href="https://ikodi.eu/blog?page_id=36">
          <NavLink>Contact</NavLink>
        </Link>
      </NavLinks>
      <Button>Sign Up</Button>
    </Container>
  );
};
export default Header;

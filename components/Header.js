/* eslint-disable @next/next/link-passhref */
import { Button } from "../styled_components";
import { Container, NavLinks, NavLink } from "./HeaderStyles";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo_ikodi_lettres.png";

const Header = (props) => {
  return (
    <Container>
      <Image src={Logo} alt="Logo Ikodi" width={80} height={20} />
      <NavLinks>
        <Link href="/">
          <NavLink>
            <FaHome />
          </NavLink>
        </Link>
        <NavLink>Projets</NavLink>
        <NavLink>Technos</NavLink>
        <NavLink>Mon parcours</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
      <Button>Sign Up</Button>
    </Container>
  );
};
export default Header;

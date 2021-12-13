import Link from "next/link";
import { NavLinks, NavLink } from "./HeaderStyles";
import { FaHome } from "react-icons/fa";

const Nav = ({ visible }) => (
  <NavLinks isVisible={visible}>
    <Link href="/" passHref>
      <NavLink>
        <FaHome />
      </NavLink>
    </Link>
    <Link href="#projects" passHref>
      <NavLink>Projets</NavLink>
    </Link>
    <Link href="#tech" passHref>
      <NavLink>Technos</NavLink>
    </Link>
    <Link href="#about" passHref>
      <NavLink>Mon parcours</NavLink>
    </Link>
    <Link href="https://ikodi.eu/blog" passHref>
      <NavLink>Blog</NavLink>
    </Link>
    <Link href="https://ikodi.eu/blog?page_id=36" passHref>
      <NavLink>Contact</NavLink>
    </Link>
  </NavLinks>
);

export default Nav;

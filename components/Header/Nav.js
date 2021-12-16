import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";
import { NavLinks, NavLink, StyledNavSup } from "./HeaderStyles";
import NavSup from "./NavSup";
import { FaHome } from "react-icons/fa";

const Nav = ({ visible, setIsVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <NavLinks isVisible={visible}>
        <Link href="/" passHref>
          <NavLink onClick={() => setIsVisible(false)}>
            <FaHome />
          </NavLink>
        </Link>
        <Link href="/#projects" passHref>
          <NavLink onClick={() => setIsVisible(false)}>Projets</NavLink>
        </Link>
        <Link href="/#tech" passHref>
          <NavLink onClick={() => setIsVisible(false)}>Technos</NavLink>
        </Link>
        <Link href="/#about" passHref>
          <NavLink onClick={() => setIsVisible(false)}>Mon parcours</NavLink>
        </Link>
        <Link href="https://ikodi.eu/blog?page_id=36" passHref>
          <NavLink onClick={() => setIsVisible(false)}>Contact</NavLink>
        </Link>
        <NavLink onClick={() => setOpen(!open)}>
          {open ? "Plutôt -" : "Encore +"}
        </NavLink>
        <StyledNavSup
          open={open}
          setOpen={setOpen}
          setIsVisible={setIsVisible}
        />
      </NavLinks>
    </Fragment>
  );
};

export default Nav;

import Link from "next/link";
import { Fragment, useState } from "react";
import { NavLinks, NavLink, StyledNavSup } from "./HeaderStyles";
import { FaHome } from "react-icons/fa";

const Nav = ({ visible, setIsVisible, slug }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <NavLinks isVisible={visible}>
        <Link href={`/${slug}`} passHref>
          <NavLink onClick={() => setIsVisible(false)}>
            <FaHome />
          </NavLink>
        </Link>
        <Link href={`/${slug}#projects`} passHref>
          <NavLink onClick={() => setIsVisible(false)}>Projets</NavLink>
        </Link>
        <Link href={`/${slug}#tech`} passHref>
          <NavLink onClick={() => setIsVisible(false)}>Technos</NavLink>
        </Link>
        <Link href={`/${slug}#about`} passHref>
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

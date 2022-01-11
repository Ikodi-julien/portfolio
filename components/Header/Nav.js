import Link from "next/link";
import { Fragment, useState } from "react";
import { NavLinks, NavLink, StyledNavSup } from "./HeaderStyles";
import { FaHome } from "react-icons/fa";

const Nav = ({ visible, setIsVisible, slug }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setIsVisible(false);
    setOpen(false);
  };
  return (
    <Fragment>
      <NavLinks isVisible={visible}>
        <Link href={`/${slug}`} passHref>
          <NavLink onClick={handleNavClick}>
            <FaHome />
          </NavLink>
        </Link>
        <Link href={`/${slug}#projects`} passHref>
          <NavLink onClick={handleNavClick}>Projets</NavLink>
        </Link>
        <Link href={`/${slug}#tech`} passHref>
          <NavLink onClick={handleNavClick}>Technos</NavLink>
        </Link>
        <Link href={`/${slug}#about`} passHref>
          <NavLink onClick={handleNavClick}>Mon parcours</NavLink>
        </Link>
        <Link href="mailto:julien.pellin@ikodi.eu" passHref>
          <NavLink onClick={handleNavClick}>Contact</NavLink>
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

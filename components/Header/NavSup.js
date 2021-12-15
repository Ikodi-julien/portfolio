import Link from "next/link";
import { Fragment } from "react";
import { NavSupContainer, NavLink } from "./HeaderStyles";
import { FaBloggerB, FaGamepad, FaWpforms } from "react-icons/fa";

const NavSup = ({ open, setOpen, setIsVisible, className }) => {
  return (
    <NavSupContainer
      className={className}
      open={open}
      onClick={() => {
        setOpen(!open);
        setIsVisible(false);
      }}
    >
      <Link href="https://ikodi.eu/blog" passHref>
        <NavLink>
          <FaBloggerB /> Blog
        </NavLink>
      </Link>
      <Link href="https://ikodi.eu/games" passHref>
        <NavLink>
          <FaGamepad />
          Jeux
        </NavLink>
      </Link>
      <Link href="/homepage" passHref>
        <NavLink>
          <FaWpforms /> Donner mon avis
        </NavLink>
      </Link>
    </NavSupContainer>
  );
};

export default NavSup;

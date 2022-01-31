import Link from "next/link";
import { Fragment } from "react";
import { NavSupContainer, NavLink } from "./HeaderStyles";
import { FaBloggerB, FaGamepad, FaWpforms, FaVirus } from "react-icons/fa";

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
        <a>
          <NavLink>
            <FaBloggerB style={{ marginRight: "0.5em" }} /> Blog
          </NavLink>
        </a>
      </Link>
      <Link href="https://ikodi.eu/games" passHref>
        <a>
          <NavLink>
            <FaGamepad style={{ marginRight: "0.5em" }} />
            Jeux
          </NavLink>
        </a>
      </Link>
      <Link href="https://feedback.ikodi.eu" passHref>
        <a>
          <NavLink>
            <FaWpforms style={{ marginRight: "0.5em" }} /> Donner mon avis
          </NavLink>
        </a>
      </Link>
    </NavSupContainer>
  );
};

export default NavSup;

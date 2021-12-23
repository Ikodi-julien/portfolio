/* eslint-disable @next/next/link-passhref */
import Button from "/styled_components/Button";
import Nav from "./Nav";
import { LogoContainer } from "/styled_components";
import { Container, Burger, UserGreating } from "./HeaderStyles";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo_ikodi_lettres.png";
import { useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Burger onClick={() => setIsVisible(!isVisible)} />

      <LogoContainer>
        <Image src={Logo} alt="Logo Ikodi" width={100} height={25} />
      </LogoContainer>

      <Nav visible={isVisible} setIsVisible={setIsVisible} slug={props.slug} />
      {props.user.pseudo === "" ? (
        <Link href="https://auth.ikodi.eu" passHref>
          <a>
            <Button>Se connecter</Button>
          </a>
        </Link>
      ) : (
        <Link href="https://auth.ikodi.eu/logout" passHref>
          <a>
            <Button>Déconnexion</Button>
          </a>
        </Link>
      )}
      <ThemeButton slug={props.slug} appName={props.appName} />
      {props.user.pseudo !== "" && (
        <UserGreating>Bienvenue {props.user.pseudo} !</UserGreating>
      )}
    </Container>
  );
};
export default Header;

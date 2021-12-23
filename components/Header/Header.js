/* eslint-disable @next/next/link-passhref */
import Button from "/styled_components/Button";
import Nav from "./Nav";
import { LogoContainer } from "/styled_components";
import { Container, Burger, UserGreating } from "./HeaderStyles";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo_ikodi_lettres.png";
import { useState, useEffect } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import axios from "axios";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({ nickname: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://auth.ikodi.eu/me", {
          withCredentials: true,
        });
        if (response.data) {
          console.log("data", response.data);
          console.log("status", response.status);
          setUser(response.data);
        } else {
          console.log("error response", response);
        }
      } catch (error) {
        console.log("error", error.toString());
      }
    }
    fetchData();
  }, []);

  const postLogout = async () => {
    try {
      await axios.post(
        "https://auth.ikodi.eu/logout",
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Burger onClick={() => setIsVisible(!isVisible)} />

      <LogoContainer>
        <Image src={Logo} alt="Logo Ikodi" width={100} height={25} />
      </LogoContainer>

      <Nav visible={isVisible} setIsVisible={setIsVisible} slug={props.slug} />
      {user.nickname === "" ? (
        <Link href="https://auth.ikodi.eu" passHref>
          <a>
            <Button>Se connecter</Button>
          </a>
        </Link>
      ) : (
        <Link href="https://auth.ikodi.eu/logout" passHref>
          <a>
            <Button onClick={postLogout}>Déconnexion</Button>
          </a>
        </Link>
      )}
      <ThemeButton slug={props.slug} appName={props.appName} />
      {user.nickname !== "" && (
        <UserGreating>Bienvenue {user.nickname} !</UserGreating>
      )}
    </Container>
  );
};
export default Header;

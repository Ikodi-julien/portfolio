/* eslint-disable @next/next/link-passhref */
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { LogoContainer, IconContainer } from "/styled_components";
import Button from "/styled_components/Button";
import ThemeButton from "../ThemeButton/ThemeButton";
import {
  Container,
  Burger,
  StyledUserGreating,
  UserButton,
} from "./HeaderStyles";
import Nav from "./Nav";
import Logo from "/public/logo_ikodi_lettres.png";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGreatingVisible, setGreatingIsVisible] = useState(true);
  const [user, setUser] = useState({ nickname: "" });
  // const user = {
  //   id: 32,
  //   nickname: "ju",
  //   firstname: "",
  //   lastname: "",
  //   email: "jupellin39@gmail.com",
  // };

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
    console.log("hé!");
    try {
      await axios.post(
        "https://auth.ikodi.eu/logout",
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setUser({ nickname: "" });
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
        <Link href="https://auth.ikodi.eu?app=portfolio" passHref>
          <a>
            <Button>Se connecter</Button>
          </a>
        </Link>
      ) : (
        <Button onClick={postLogout}>Déconnexion</Button>
      )}
      <ThemeButton slug={props.slug} appName={props.appName} />
      {user.nickname !== "" && (
        <Fragment>
          <UserButton onClick={() => setGreatingIsVisible(true)}>
            <IconContainer>
              <FaUserAlt />
            </IconContainer>
          </UserButton>
          <StyledUserGreating
            user={user}
            open={isGreatingVisible}
            setOpen={setGreatingIsVisible}
          />
        </Fragment>
      )}
    </Container>
  );
};
export default Header;

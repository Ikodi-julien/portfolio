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
import fetchUser from "../../helpers/fetchUser";
import postLogout from "../../helpers/postLogout";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGreatingVisible, setGreatingIsVisible] = useState(false);
  const [user, setUser] = useState({ nickname: "" });
  // const user = {
  //   id: 32,
  //   nickname: "ju",
  //   firstname: "",
  //   lastname: "",
  //   email: "jupellin39@gmail.com",
  //   password:
  //     "2b$10$PvkWglwOBiEbi9RgVWah32b$10$PvkWglwOBiEbi9RgVWah32b$10$PvkWglwOBiEbi9RgVWah3",
  //   apisignup: true,
  //   active: true,
  // };

  useEffect(() => {
    (async () => {
      const userData = await fetchUser();
      if (userData && userData.nickname !== user.nickname) {
        setGreatingIsVisible(true);
        setUser(userData);
      }
    })();
  }, []);

  const logoutHandler = () => {
    postLogout();
    setUser({ nickname: "" });
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
        <Button onClick={logoutHandler} color={"secondary"}>
          Déconnexion
        </Button>
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

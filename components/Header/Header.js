import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { LogoContainer, IconContainer } from "/styled_components";
import Button from "/styled_components/Button";
import ThemeButton from "../ThemeButton/ThemeButton";
import {
  Container,
  Burger,
  StyledUserWelcoming,
  UserButton,
} from "./HeaderStyles";
import Nav from "./Nav";
import Logo from "/public/logo_ikodi_lettres.png";
import fetchUser from "../../helpers/fetchUser";
import postLogout from "../../helpers/postLogout";
import deleteAccount from "../../helpers/deleteAccount";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWelcomingVisible, setWelcomingIsVisible] = useState(false);
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

  const logoutHandler = () => {
    const message = postLogout();
    if (message) alert("Vous êtes bien déconnecté.");
    if (!message)
      alert(
        "Ça n'a pas fonctionné semble-t-il... peut-être réessayer ? Sinon, n'hésitez pas à me contacter pour que je fasse le nécessaire."
      );
    setUser({ nickname: "" });
  };

  const handleDelete = async () => {
    const id = await deleteAccount();
    if (id) alert("Compte supprimé");
    if (!id)
      alert(
        "Ça n'a pas fonctionné semble-t-il... peut-être réessayer ? Sinon, n'hésitez pas à me contacter pour que je fasse le nécessaire."
      );
    setUser({ nickname: "" });
  };

  useEffect(() => {
    try {
      (async () => {
        const userData = await fetchUser();
        if (userData) {
          setUser(userData);
          if (!document.cookie.includes("connected=know")) {
            setWelcomingIsVisible(true);
            document.cookie = "connected=know";
          }
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Burger onClick={() => setIsVisible(!isVisible)} />

      <Nav visible={isVisible} setIsVisible={setIsVisible} slug={props.slug} />
      {user.nickname === "" ? (
        <a href="https://auth.ikodi.eu?app=portfolio">
          <Button>Se connecter</Button>
        </a>
      ) : (
        <Button onClick={() => logoutHandler()} color={"secondary"}>
          Déconnexion
        </Button>
      )}
      <ThemeButton slug={props.slug} appName={props.appName} />
      {user.nickname !== "" && (
        <Fragment>
          <UserButton onClick={() => setWelcomingIsVisible(true)}>
            <IconContainer>
              <FaUserAlt />
            </IconContainer>
          </UserButton>
          <StyledUserWelcoming
            user={user}
            open={isWelcomingVisible}
            setOpen={setWelcomingIsVisible}
            deleteAccount={handleDelete}
          />
        </Fragment>
      )}
    </Container>
  );
};
export default Header;

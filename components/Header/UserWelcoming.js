import { useState } from "react";
import { IconContainer } from "../../styled_components";
import Button from "/styled_components/Button";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { UserWelcomingFooter } from "./HeaderStyles";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const UserWelcoming = ({ user, open, setOpen, deleteAccount, className }) => {
  const [isModalOpen, setModal] = useState(false);

  return (
    <article className={className}>
      <IconContainer
        onClick={() => setOpen(!open)}
        right="0"
        position="absolute"
        padding="12px"
        margin="0"
        fontSize="1.5em"
      >
        <FaTimes />
      </IconContainer>

      <h1>Bienvenue {user.nickname} !</h1>
      <p>Merci d&apos;avoir testé la connexion avec auth.ikodi.eu.</p>
      <br />
      <p>
        Pour info, ci-dessous les données stockées en base (le mot de passe est
        stocké dans sa version cryptée).
      </p>
      <br />
      <div style={{ width: "100%" }}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Informations en base de données</th>
            </tr>
          </thead>
          <tbody>
            {Object.getOwnPropertyNames(user).map((propname) => {
              if (user[propname] !== "" && propname !== "password")
                return (
                  <tr key={propname}>
                    <td>{propname}</td>
                    <td className={"break"}>{user[propname].toString()}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
      <UserWelcomingFooter>
        <a href="https://auth.ikodi.eu">
          <Button color={"secondary"}>Gérer le profil</Button>
        </a>
        {/* <ConfirmModal
          isOpen={isModalOpen}
          setIsOpen={setModal}
          text={`Confirmer la suppression du compte "${user.email}" ?`}
          actionToDispatch={deleteAccount}
        /> */}
      </UserWelcomingFooter>
    </article>
  );
};

export default UserWelcoming;

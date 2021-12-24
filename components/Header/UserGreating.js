import { IconContainer } from "../../styled_components";
import Button from "/styled_components/Button";
import { UserGreatingFooter } from "./HeaderStyles";
import { FaTimes } from "react-icons/fa";

const UserGreating = ({ user, open, setOpen, className }) => (
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
    <p>Pour info, ci-dessous les données stockées en base.</p>
    <br />
    <table>
      <thead>
        <tr>
          <th colSpan="2">Informations en base de données</th>
        </tr>
      </thead>
      <tbody>
        {Object.getOwnPropertyNames(user).map((propname) => (
          <tr key={propname}>
            <td>{propname}</td>
            <td>{user[propname]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <UserGreatingFooter>
      <Button onClick={() => console.log("hé")} color={"secondary"}>
        Supprimer ce compte
      </Button>
    </UserGreatingFooter>
  </article>
);

export default UserGreating;

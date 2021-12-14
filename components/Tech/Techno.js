import { TechCard, TechTitle, TechText } from "./TechStyles";
import { FaServer, FaReact, FaAws, FaUsers, FaLock } from "react-icons/fa";

const Techno = ({ techno }) => {
  return (
    <TechCard>
      {techno.icon === "FaServer" && <FaServer style={{ fontSize: "1.5em" }} />}
      {techno.icon === "FaReact" && <FaReact style={{ fontSize: "1.5em" }} />}
      {techno.icon === "FaAws" && <FaAws style={{ fontSize: "1.5em" }} />}
      {techno.icon === "FaUsers" && <FaUsers style={{ fontSize: "1.5em" }} />}
      {techno.icon === "FaLock" && <FaLock style={{ fontSize: "1.5em" }} />}
      <TechTitle>{techno.title}</TechTitle>
      {techno.desc.map((string) => (
        <TechText key={string}>{string}</TechText>
      ))}
    </TechCard>
  );
};
export default Techno;

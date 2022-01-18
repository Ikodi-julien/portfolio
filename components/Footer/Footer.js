import {
  FooterWrapper,
  FooterRow,
  FooterColumn,
  FooterLink,
} from "./FooterStyles";
import { IconContainer, Divider, Text } from "../../styled_components";
import Link from "next/link";
import {
  FaEnvelope,
  FaWpforms,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <FooterWrapper>
      <FooterRow>
        <FooterColumn>
          <a href="mailto:julien.pellin@ikodi.eu">
            <IconContainer>
              <FaEnvelope style={{ marginRight: "1rem" }} />
            </IconContainer>
            julien.pellin@ikodi.eu
          </a>
          <a href="https://feedback.ikodi.eu">
            <IconContainer>
              <FaWpforms style={{ marginRight: "1rem" }} />
            </IconContainer>
            Formulaire de feedback
          </a>
        </FooterColumn>

        <div style={{ display: "flex" }}>
          <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
            <IconContainer fontSize="1.8em">
              <FaLinkedin />
            </IconContainer>
          </a>
          <a href="https://github.com/ikodi-julien">
            <IconContainer fontSize="1.8em">
              <FaGithubSquare />
            </IconContainer>
          </a>
        </div>
      </FooterRow>
      <div style={{ width: "100%", padding: "2rem 0" }}></div>
      <Divider width="80%" height="2px" />
      <div style={{ width: "100%", padding: "2rem 0" }}></div>
      <FooterRow justifyContent="left">
        <ul>
          <li>
            <Text>01/2022</Text>
          </li>
          <li>
            <Text fontSize="1rem">
              Ce portfolio est réalisé avec Next.js et React
            </Text>
          </li>
          <li>
            <Text fontSize="1rem">
              Il est déployé sur une instance AWS EC2 avec Docker
            </Text>
          </li>
        </ul>
      </FooterRow>
    </FooterWrapper>
  );
};
export default Footer;

import { FooterWrapper, FooterRow, FooterLink } from "./FooterStyles";
import { IconContainer } from "../../styled_components";
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
      <div>
        <a href="mailto:julien.pellin@ikodi.eu">
          <IconContainer>
            <FaEnvelope style={{ fontSize: "1.5em", marginRight: "1em" }} />
            julien.pellin@ikodi.eu
          </IconContainer>
        </a>
        <Link href="https://feedback.ikodi.eu" passHref>
          <a>
            <IconContainer>
              <FaWpforms style={{ fontSize: "1.5em", marginRight: "1em" }} />
              Formulaire de feedback
            </IconContainer>
          </a>
        </Link>
      </div>
      <FooterRow>
        <IconContainer style={{ cursor: "pointer" }}>
          <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
            <FaLinkedin />
          </a>
        </IconContainer>
        <IconContainer style={{ cursor: "pointer" }}>
          <a href="https://github.com/ikodi-julien">
            <FaGithubSquare />
          </a>
        </IconContainer>
      </FooterRow>
    </FooterWrapper>
  );
};
export default Footer;

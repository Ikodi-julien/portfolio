import { FooterWrapper, FooterRow, FooterLink } from "./FooterStyles";
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
          <FooterLink>
            <FaEnvelope style={{ fontSize: "1.5em", marginRight: "1em" }} />
            julien.pellin@ikodi.eu
          </FooterLink>
        </a>
        <Link href="/feedback" passHref>
          <a>
            <FooterLink>
              <FaWpforms style={{ fontSize: "1.5em", marginRight: "1em" }} />
              Formulaire de feedback
            </FooterLink>
          </a>
        </Link>
      </div>
      <FooterRow>
        <FooterLink style={{ cursor: "pointer" }}>
          <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
            <FaLinkedin />
          </a>
        </FooterLink>
        <FooterLink style={{ cursor: "pointer" }}>
          <a href="https://github.com/ikodi-julien">
            <FaGithubSquare />
          </a>
        </FooterLink>
      </FooterRow>
    </FooterWrapper>
  );
};
export default Footer;

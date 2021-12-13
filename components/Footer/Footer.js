import { FooterWrapper, FooterRow, FooterLink } from "./FooterStyles";
import { IconLink } from "../../styled_components";
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
          <IconLink>
            <FaEnvelope style={{ fontSize: "1.5em", marginRight: "1em" }} />
            julien.pellin@ikodi.eu
          </IconLink>
        </a>
        <Link href="/feedback" passHref>
          <a>
            <IconLink>
              <FaWpforms style={{ fontSize: "1.5em", marginRight: "1em" }} />
              Formulaire de feedback
            </IconLink>
          </a>
        </Link>
      </div>
      <FooterRow>
        <IconLink style={{ cursor: "pointer" }}>
          <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
            <FaLinkedin />
          </a>
        </IconLink>
        <IconLink style={{ cursor: "pointer" }}>
          <a href="https://github.com/ikodi-julien">
            <FaGithubSquare />
          </a>
        </IconLink>
      </FooterRow>
    </FooterWrapper>
  );
};
export default Footer;

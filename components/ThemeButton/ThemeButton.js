import Link from "next/link";
import { useRouter } from "next/router";
import { CgDarkMode } from "react-icons/cg";
import { ThemeButtonContainer } from "./ThemeButtonStyles";

const ThemeButton = ({ slug, appName }) => {
  const router = useRouter();
  const pathName = router.pathname.split("/")[1];

  const hrefs = {
    "": "/theme-light",
    "theme-light": "/theme-dark",
    "theme-dark": "/theme-light",
  };

  return (
    <ThemeButtonContainer>
      <Link
        href={`${pathName === "details" ? "/details" : ""}${
          appName !== "" && appName !== undefined ? `/${appName}` : ""
        }${hrefs[slug]}`}
        passHref
      >
        <CgDarkMode style={{ fontSize: "2em" }} />
      </Link>
    </ThemeButtonContainer>
  );
};
export default ThemeButton;

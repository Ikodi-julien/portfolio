import Homepage from "../../index";
import { dark, light, shared } from "../../../styled_components/themes/theme";

const ThemedHomepage = (props) => {
  return <Homepage theme={props.theme} />;
};
export default ThemedHomepage;

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          theme: "dark",
        },
      },
      {
        params: {
          theme: "light",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const theme = {
    dark: { ...dark, ...shared },
    light: { ...light, ...shared },
  };

  return {
    props: { theme: theme[context.params.theme] },
  };
}

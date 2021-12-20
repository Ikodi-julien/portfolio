import Homepage from "../index";
import { dark, light, shared } from "../../styled_components/themes/theme";

const ThemedHomepage = (props) => {
  return <Homepage theme={props.theme} slug={props.slug} />;
};
export default ThemedHomepage;

export function getStaticPaths() {
  const slug = ["theme-dark", "theme-light"];
  return {
    paths: [
      {
        params: {
          theme: slug[0],
        },
      },
      {
        params: {
          theme: slug[1],
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const themes = {
    dark: { ...dark, ...shared },
    light: { ...light, ...shared },
  };
  const theme = themes[context.params.theme.split("-")[1]];
  const slug = context.params.theme;

  return {
    props: { theme, slug },
  };
}

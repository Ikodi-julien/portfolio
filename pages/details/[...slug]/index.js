import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../../components/Layout";
import AppDetails from "../../../components/AppDetails/AppDetails";
import { appList } from "../../../database/appList";
import { dark, light, shared } from "/styled_components/themes/theme";

const AppPage = ({ appDetails, theme, slug }) => {
  return (
    <Fragment>
      <Head>
        <title>{appDetails.name}</title>
        <meta name="descrition" content={appDetails.desc}></meta>
      </Head>
      <Layout theme={theme} slug={slug} appName={appDetails.name}>
        <AppDetails appDetails={appDetails} />
      </Layout>
    </Fragment>
  );
};
export default AppPage;

export function getStaticPaths() {
  const paths = [];
  appList.forEach((app) => {
    paths.push({
      params: {
        slug: [app.name, ""],
      },
    });
    paths.push({
      params: {
        slug: [app.name, "theme-dark"],
      },
    });
    paths.push({
      params: {
        slug: [app.name, "theme-light"],
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const [appName] = context.params.slug;
  const [appDetails] = appList.filter((app) => app.name === appName);
  const themes = {
    dark: { ...dark, ...shared },
    light: { ...light, ...shared },
  };
  const theme = context.params.slug[1]
    ? themes[context.params.slug[1].split("-")[1]]
    : themes.dark;
  const slug = context.params.slug[1] ? context.params.slug[1] : null;

  return {
    props: { appDetails, theme, slug },
  };
}

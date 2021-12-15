import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import AppDetails from "../../components/AppDetails/AppDetails";
import { appList } from "../../database/appList";

const AppPage = ({ appDetails }) => {
  return (
    <Fragment>
      <Head>
        <title>{appDetails.name}</title>
        <meta name="descrition" content={appDetails.desc}></meta>
      </Head>
      <Layout>
        <AppDetails appDetails={appDetails} />
      </Layout>
    </Fragment>
  );
};
export default AppPage;

export function getStaticPaths() {
  return {
    paths: appList.map((app) => ({
      params: {
        appName: app.name,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const [appDetails] = appList.filter(
    (app) => app.name === context.params.appName
  );

  return {
    props: { appDetails },
  };
}

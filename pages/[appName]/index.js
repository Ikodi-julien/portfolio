import { Fragment } from "react";
import { appList } from "../../database/appList";

const appPage = ({ appDetails }) => {
  return (
    <Fragment>
      <div>{appDetails.name}</div>
      <div>{appDetails.title}</div>
      <div>{appDetails.desc}</div>
      <div>{appDetails.features[0]}</div>
    </Fragment>
  );
};
export default appPage;

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

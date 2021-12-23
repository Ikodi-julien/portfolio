import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "/components/Hero/Hero";
import Projects from "/components/Projects/Projects";
import Technos from "../components/Tech/Technos";
import About from "../components/About/About";
import { dark, light, shared } from "../styled_components/themes/theme";

const Homepage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - J. PELLIN</title>
        <meta
          name="description"
          content="Le portfolio de Julien PELLIN, développeur d'applications pour le web"
        />
      </Head>
      <Layout theme={props.theme} slug={props.slug}>
        <Hero />
        <Projects slug={props.slug} />
        <Technos />
        <About />
      </Layout>
    </Fragment>
  );
};
export default Homepage;

export async function getStaticProps(context) {
  return {
    props: { theme: { ...dark, ...shared }, slug: "theme-dark" },
  };
}

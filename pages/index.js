import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "/components/Hero/Hero";
import Projects from "/components/Projects/Projects";
import Technos from "../components/Tech/Technos";
import About from "../components/About/About";

const Homepage = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - J. PELLIN</title>
        <meta
          name="description"
          content="Le portfolio de Julien PELLIN, développeur d'applications pour le web"
        />
      </Head>
      <Layout>
        <Hero />
        <Projects />
        <Technos />
        <About />
      </Layout>
    </Fragment>
  );
};
export default Homepage;

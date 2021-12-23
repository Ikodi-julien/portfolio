import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "/components/Hero/Hero";
import Projects from "/components/Projects/Projects";
import Technos from "../components/Tech/Technos";
import About from "../components/About/About";
import { dark, light, shared } from "../styled_components/themes/theme";
import axios from "axios";

const Homepage = (props) => {
  const [user, setUser] = useState({ pseudo: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://auth.ikodi.eu/me", {
          withCredentials: true,
        });
        if (response.data) {
          console.log("data", response.data);
          console.log("status", response.status);
          setUser(response.data);
        } else {
          console.log("error response", response);
        }
      } catch (error) {
        console.log("error", error.toString());
      }
    }
    fetchData();
  });

  return (
    <Fragment>
      <Head>
        <title>Portfolio - J. PELLIN</title>
        <meta
          name="description"
          content="Le portfolio de Julien PELLIN, développeur d'applications pour le web"
        />
      </Head>
      <Layout theme={props.theme} slug={props.slug} user={user}>
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
    props: { theme: { ...dark, ...shared }, slug: "" },
  };
}

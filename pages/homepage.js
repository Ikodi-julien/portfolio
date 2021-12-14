import Layout from "../components/Layout";
import Hero from "/components/Hero/Hero";
import Projects from "/components/Projects/Projects";
import Technos from "../components/Tech/Technos";
import About from "../components/About/About";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technos />
      <About />
    </Layout>
  );
};
export default Homepage;

import Layout from "../components/Layout";
import Hero from "/components/Hero/Hero";
import Projects from "/components/Projects/Projects";
import { Divider } from "../styled_components";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Divider />
      <Projects />
      <Divider />
    </Layout>
  );
};
export default Homepage;

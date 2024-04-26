import Layout from "../components/layout";
import AboutMe from "./about-me";
import Contact from "./contact";
import HomePageIntro from "./home-page-intro";
import Projects from "./projects";

const Home = () => {
  return (
    <>
      <Layout><HomePageIntro /></Layout>
      <Layout><Projects /></Layout>
      <Layout><Contact /></Layout>
      <Layout><AboutMe /></Layout>
    </>
  );
};

export default Home;

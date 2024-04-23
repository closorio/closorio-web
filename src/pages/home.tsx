import Layout from "../components/layout";
import AboutMe from "./about-me";
import Contact from "./contact";
import HomePageIntro from "./home-page-intro";
import Projects from "./projects";

const Home = () => {
  return (
    <>
      <Layout><HomePageIntro /></Layout>
      <Layout><AboutMe /></Layout>
      <Layout><Projects /></Layout>
      <Layout><Contact /></Layout>
    </>
  );
};

export default Home;

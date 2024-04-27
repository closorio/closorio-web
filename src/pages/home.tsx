import Layout from "../components/layout";
import AboutMe from "./about-me";
import Experience from "./experience";
import HomePageIntro from "./home-page-intro";
import Projects from "./projects";

const Home = () => {
  return (
    <>
      <Layout><HomePageIntro /></Layout>
      <Layout><Projects /></Layout>
      <Layout><Experience /></Layout>
      <Layout><AboutMe /></Layout>
    </>
  );
};

export default Home;

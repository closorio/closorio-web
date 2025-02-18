import Layout from "../components/layout";
import AboutMe from "./about-me";
import Experience from "./experience";
import HomePageIntro from "./home-page-intro";
import Projects from "./projects";
import backgroundSvg from "../../public/static/light-background.svg";

const Home = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed pt-10"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
      }}
    >
      <Layout><HomePageIntro /></Layout>
      <Layout><Projects /></Layout>
      <Layout><Experience /></Layout>
      <Layout><AboutMe /></Layout>
    </div>
  );
};

export default Home;
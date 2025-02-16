import Layout from "../components/layout";
import AboutMe from "./about-me";
import Experience from "./experience";
import HomePageIntro from "./home-page-intro";
import Projects from "./projects";
import backgroundSvg from "../assets/light-background.svg"; // Asegúrate de ajustar la ruta según la ubicación de tu SVG

const Home = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed"
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
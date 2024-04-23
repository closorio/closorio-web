import SectionProject from "../components/section-project";

const Projects = () => {
  return (
    <>
      <section
        id="section-projects"
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-10 mt-20 mx-auto">
          <div className="sm:w-3/5 mb-10 mx-auto px-4">
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Proyectos
            </h2>
            <p className="leading-relaxed text-base">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>

          <SectionProject
            title="CampAds"
            imageUrl="src/assets/project-1.png"
            description="Williamsburg occupy sustainable snackwave gochujang I created with each project containing its own case study."
            year="2023"
            type="Figma Project"
            buttonText="Ir a CapAds"
            url="https://www.figma.com/proto/7x0s2Nv4UC9u8TpZ5AfZyJ/CampAds-Webpage?node-id=189-1370&starting-point-node-id=189%3A1370&scaling=scale-down&mode=design&t=o8pU0xt61TioYpsP-1"
          />

          <SectionProject
            title="SLC Budget"
            imageUrl="src/assets/project-2.png"
            description="Williamsburg occupy sustainable snackwave gochujang I created with each project containing its own case study."
            year="2023"
            type="Web Application"
            buttonText="Ir a SLC Budget"
            url="https://www.figma.com/proto/THMxXHpJbsptUyRD7vfHn5/SLC-Budget-APP?type=design&node-id=1004-104&t=gu0FlP4BFOA6030s-1&scaling=min-zoom&page-id=619%3A3231&mode=design"
          />

          <SectionProject
            title="Don Gato y Asociados"
            imageUrl="src/assets/project-3.png"
            description="Williamsburg occupy sustainable snackwave gochujang I created with each project containing its own case study."
            year="2023"
            type="Figma Project"
            buttonText="Ir a Don Gato"
            url="https://www.figma.com/proto/TGa65n3PwsFW3xQcPdkSf0/Don-gato-y-Asociados?type=design&node-id=1-6&t=y3WlXY3DjYJJykT0-1&scaling=min-zoom&page-id=0%3A1&mode=design"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;

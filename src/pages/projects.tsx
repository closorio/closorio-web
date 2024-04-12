import SectionProject from "../components/section-project";

const Projects = () => {
  return (
    <>
      <section
        id="section-projects"
        className="text-gray-600 body-font min-h-screen border-4"
      >
        <div className="container px-5 py-18 mt-20 mx-auto">
          <div className="sm:w-1/2 mb-10 mx-auto px-4">
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Proyectos
            </h2>
            <p className="leading-relaxed text-base">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>

          <SectionProject />
          <SectionProject />
          <SectionProject />
        </div>
      </section>
    </>
  );
};

export default Projects;

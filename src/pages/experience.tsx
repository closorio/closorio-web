import ExperienceItem from "../components/experience-item";
import SliderBrands from "../components/slider-brand";

const Experience = () => {
  const EXPERIENCIE = [
    {
      date: "Febrero 2023",
      title: "Soporte Técnico web",
      company: "Universidad del Valle",
      /*
      DISEÑÉ UNA APLICACIÓN CON TECNOLOGÍAS DE PROGRAMACIÓN WEB, COMO JAVASCRIPT, NODEJS ENTRE OTRAS, PARA LA GENERACIÓN DE INFORMES DE FORMA AUTOMATIZADA, CON EL PROPÓSITO DE OPTIMIZAR LA REALIZACIÓN DE LAS COPIAS DE SEGURIDAD DE LOS REPORTES DE INCIDENCIAS PROCESADOS EN UNA PLATAFORMA COLABORATIVA DE GESTIÓN DEL TRABAJO USANDO EN LA DINTEV.
      
Dirección de Nuevas Tecnologías y Educación Virtual - DINTEV
Monitoría Soporte Técnico:*/
      description:
        " Entre las tareas realizadas, trabajé en el soporte técnico, mantenimiento y actualización de la página web del campus virtual. Además de la constante investigación de nuevas tecnologías para mejorar la experiencia de los usuarios.",
      link: "https://github.com/closorio",
    },
  ];

  return (
    <>
      <section id="section-projects" className="text-gray-600 body-font">
        <div className="container px-5 md:px-40  py-18 mx-auto ">
          <div className="mb-10 mx-auto pt-10 w-full">
            <h2 className="title-font flex items-center gap-x-4 text-2xl md:text-3xl font-bold text-gray-900 mt-6 mb-3">
              <span className=" w-8 text-primary">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
                </svg>
              </span>
              Mi Experiencia
            </h2>
            <hr></hr>
          </div>
          <ol className="relative mt-16">
            {EXPERIENCIE.map((experience, index) => (
              <li key={index}>
                <ExperienceItem {...experience} />
              </li>
            ))}
          </ol>
          <div className="mb-10 mx-auto pt-10 w-full">
          <div className="flex -mx-4 -mb-10 text-justify bg-white">
            <div className="mb-8 mx-auto px-4 text-center">
              <h2 className="title-font flex items-center gap-x-4 text-2xl md:text-3xl font-bold text-gray-900 mt-6 mb-3">
                <span className=" w-8 text-primary">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m1.75 11 6.25 3.25 6.25-3.25m-12.5-3 6.25 3.25 6.25-3.25m-6.25-6.25-6.25 3.25 6.25 3.25 6.25-3.25z" />
                  </svg>
                </span>
                Mi Frontend Stack
              </h2>
              <SliderBrands />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

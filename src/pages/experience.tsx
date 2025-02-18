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
        " Soporte técnico, mantenimiento y actualización de la página web del campus virtual de la Universidad el Valle. Investigación y desarrollo de pluggins y nuevas tecnologías para la mejora en la experiencia de usuario.",
    },
    /*********************************************************************************************************************/
    {
      date: "Septiembre 2023",
      title: "Soporte Técnico web",
      company: "FENALCO - Federación Nacional de Comerciantes",
      description:
        " Resolución de solicitudes técnicas y soporte a usuarios de la aplicación web TIERS. Administración y optimización de registros en la plataforma web del proyecto. Reporte de incidencias y propuestas de mejora en reuniones semanales. ",
    },
    /*********************************************************************************************************************/
    {
      date: "Diciembre 2020",
      title: "Analista en el área de servicios",
      company: "COMPUNET",
      description:
        " Elaboración de reportes y documentación mensual a partir de bases de datos. Gestión de citas y reuniones mediante herramientas digitales (Microsoft Teams) • Actualización de información corporativa, asegurando precisión y eficiencia. ",
    },
  ];

  return (
    <>
      <section id="section-experience" className="text-gray-600 body-font">
        <div className="custom-container">
          <div className="mb-20 mx-auto w-full">
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
            <hr className="w-3/4 h-1 mr-auto my-4 bg-primary opacity-70"></hr>
          </div>
          <ol className="relative mt-16">
            {EXPERIENCIE.map((experience, index) => (
              <li key={index}>
                <ExperienceItem {...experience} />
              </li>
            ))}
          </ol>

          <div className="mb-10 mx-auto pt-10 w-full">
            <div className="flex -mx-2 -mb-10 text-justify bg-white rounded-lg shadow-inner shadow-gray-500/80">
              <div className="mb-8 mx-auto px-4 text-center">
                <h2 className="title-font flex items-center gap-x-4 text-2xl  md:text-3xl font-bold text-gray-900 mt-6 mb-3">
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

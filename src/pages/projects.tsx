import SectionProject from "../components/section-project";

const Projects = () => {
  return (
    <>
      <section id="section-projects" className="text-gray-600 body-font">
        <div className="custom-container">
          <div className="mb-10 mx-auto w-full">
            <h2 className="title-font flex items-center gap-x-4 text-2xl md:text-3xl font-bold text-gray-900 mt-6">
              <span className=" w-8 text-primary">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V13.5C2 14.8807 3.11929 16 4.5 16H9.47466C9.58466 15.6385 9.75768 15.3 9.98502 15H4.5C3.67157 15 3 14.3284 3 13.5V5.99873H15V9.94266L15.102 9.84065C15.3683 9.5744 15.6738 9.37139 16 9.23163V4.5C16 3.11929 14.8807 2 13.5 2H4.5ZM2.99902 4.49878C2.99902 3.67035 3.6706 2.99878 4.49902 2.99878H13.499C14.3275 2.99878 14.999 3.67035 14.999 4.49878V4.99878H2.99902V4.49878ZM8.35227 7.1452C8.54753 7.34046 8.54753 7.65704 8.35227 7.8523L6.20583 9.99875L8.35227 12.1452C8.54753 12.3405 8.54753 12.657 8.35227 12.8523C8.15701 13.0476 7.84043 13.0476 7.64517 12.8523L5.14517 10.3523C4.9499 10.157 4.9499 9.84046 5.14516 9.6452L7.64516 7.1452C7.84043 6.94993 8.15701 6.94993 8.35227 7.1452ZM10.1464 12.1452C9.95118 12.3405 9.95119 12.6571 10.1464 12.8523C10.3417 13.0476 10.6583 13.0476 10.8536 12.8523L13.3536 10.3523C13.5488 10.1571 13.5488 9.84048 13.3536 9.64522L10.8536 7.14523C10.6583 6.94996 10.3417 6.94996 10.1464 7.14523C9.95119 7.34049 9.95119 7.65707 10.1464 7.85233L12.2929 9.99878L10.1464 12.1452ZM15.8092 10.5478L10.9798 15.3772C10.6982 15.6588 10.4984 16.0116 10.4018 16.3979L10.0274 17.8958C9.86451 18.5472 10.4546 19.1372 11.106 18.9744L12.6039 18.5999C12.9902 18.5033 13.343 18.3036 13.6246 18.022L18.454 13.1926C19.1843 12.4622 19.1843 11.2781 18.454 10.5478C17.7237 9.81741 16.5395 9.81741 15.8092 10.5478Z" />
                </svg>
              </span>
              Mis Proyectos
            </h2>
            <hr className="w-3/4 h-1 mr-auto my-4 bg-primary opacity-70"></hr>
          </div>

          <SectionProject
            title="Botsniok"
            imageUrl="public/static/view-botsniok.png"
            description="Bot de Telegram que funciona como puente de comunicación entre canales de idiomas distintos, integrando traducción automática y reenvío de mensajes (texto y multimedia) entre un canal uno o varios canales distintos"
            year="2024"
            type="Telegram Bot"
            buttonText="Ir a Botsniok"
            url="https://github.com/closorio/transbot_bot"
            badges={[
              "Javascript",
              "Nodejs",
              "Termux",
              "Telegram API",
              "Google API",
            ]}
          />

          <SectionProject
            title="Ciclovia AutoDocs"
            imageUrl="public/static/view-ciclovia-autodocs.png"
            description="Software de generación cronogramas de actividades mensual en formato de hojas de cálculo para la optimización en la recolección de datos de usuarios, simplificando la generación de documentación necesaria para la validación de cuentas de cobro."
            year="2023"
            type="Pluggin de Google Sheets"
            buttonText="Ir a AutoDocs"
            url="https://github.com/closorio/proyecto-ciclovia-autodocs"
            badges={["Javascript", "Google Apps Script", "Google API" , "Google Workspace"]}
          />

          <SectionProject
            title="SLC Budget"
            imageUrl="public/static/project-2.png"
            description="Aplicación web diseñada para gestionar eventos y actividades grupales, facilitando la comunicación y la administración de gastos entre amigos, familiares o compañeros de trabajo."
            year="2023"
            type="Aplicación Web"
            buttonText="Ir a SLC Budget"
            url=" https://github.com/closorio/SLC-Budget-Website"
            /*https://www.figma.com/proto/THMxXHpJbsptUyRD7vfHn5/SLC-Budget-APP?type=design&node-id=1004-104&t=gu0FlP4BFOA6030s-1&scaling=min-zoom&page-id=619%3A3231&mode=design*/
            badges={["Figma", "React", "Nodejs", "Material UI", "Docker"]}
          />

          <SectionProject
            title="CampAds"
            imageUrl="public/static/project-1.png"
            description="Diseño de página web de anuncios clasificados exclusivo para estudiantes, maestros y egresados de la Universidad del Valle, que alberga emprendimientos, compraventas y servicios."
            year="2023"
            type="Proyecto en Figma"
            buttonText="Ir a CapAds"
            url="https://www.figma.com/proto/7x0s2Nv4UC9u8TpZ5AfZyJ/CampAds-Webpage?node-id=189-1370&starting-point-node-id=189%3A1370&scaling=scale-down&mode=design&t=o8pU0xt61TioYpsP-1"
            badges={["Figma", "Inkscape", "UI/UX Design"]}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;

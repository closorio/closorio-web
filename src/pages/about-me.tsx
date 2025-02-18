const AboutMe = () => {
  return (
    <>
      <section id="section-aboutme" className="text-gray-600 body-font pb-2">
        <div className="custom-container md:pb-20">
          <div className="mx-auto w-full">
            <h2 className="title-font flex items-center gap-x-4 text-2xl md:text-3xl font-bold text-gray-900 mt-6 mb-3">
              <span className=" w-8 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 21H4C4 17.4735 6.60771 14.5561 10 14.0709M16.4976 16.2119C15.7978 15.4328 14.6309 15.2232 13.7541 15.9367C12.8774 16.6501 12.7539 17.843 13.4425 18.6868C13.8312 19.1632 14.7548 19.9983 15.4854 20.6353C15.8319 20.9374 16.0051 21.0885 16.2147 21.1503C16.3934 21.203 16.6018 21.203 16.7805 21.1503C16.9901 21.0885 17.1633 20.9374 17.5098 20.6353C18.2404 19.9983 19.164 19.1632 19.5527 18.6868C20.2413 17.843 20.1329 16.6426 19.2411 15.9367C18.3492 15.2307 17.1974 15.4328 16.4976 16.2119ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" />
                </svg>
              </span>
              Sobre mí
            </h2>
            <hr className="w-3/4 h-1 mr-auto my-4 bg-primary opacity-70"></hr>
          </div>
          <p className="leading-relaxed text-base mb-4">
            Inicié en la programación a mediados del 2018 en la creación de diversos proyectos como requisitos para los cursos académicos dados en la Universidad del Valle, en Cali, Colombia.
            Actualmente me encuentro en la búsqueda de nuevos desafíos en mi área profesional como Programador Web Junior.
            </p>
          <p className="leading-relaxed text-base">
            Adicionalmente, cuento con un par de títulos más como Técnico en sistemas y Diseño gráfico, puesto que crecí siendo influenciado por el rápido avance y desarrollo de la tecnología y el
            poder del impacto audiovisual en la vida de las personas, como en la mía a través de las películas y los videojuegos.
            </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

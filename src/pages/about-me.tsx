const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("section-contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="section-aboutme"
        className="text-gray-600 body-font min-h-80 bg-hero-pattern bg-repeat bg-secondary-dark bg-opacity-50 shadow-md"
      >
        <div className="container px-5 py-20 mx-auto md:mt-12 md:mb-20 ">
          <div className="flex -mx-4 mb-10 text-justify bg-white/40 rounded-lg shadow-md">
            <div className="w-4/5 sm:w-3/5 mb-10 mx-auto px-4 pt-6">
              <h2 className="title-font text-2xl font-medium text-gray-900 md:mt-6 mb-4  text-center md:text-start">
                Acerca de mí
              </h2>

              <p className="leading-relaxed text-base">
                I'm a Frontend Focused Web Developer building and managing the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>
              <p className="leading-relaxed text-base">
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin and Instagram where I post useful content related
                to Web Development and Programming
              </p>
              <p className="leading-relaxed text-base">
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>

              <button
                onClick={scrollToContact}
                className="flex mx-auto mt-6 text-white bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Contacto
              </button>
            </div>
          </div>

          <div className="flex -mx-4 -mb-10 text-justify bg-white rounded shadow-inner">
            <div className="sm:w-1/2 mb-10 mx-auto px-4 text-center">
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Mis habilidades y tecnologías
              </h2>
              <div className="flex flex-wrap mx-auto justify-center items-center">
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  HTML
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  CSS
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  JavaScript
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  TypeScript
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  React
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Git
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Github
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Figma
                </div>
                <div className="mt-6 mr-4 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Terminal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

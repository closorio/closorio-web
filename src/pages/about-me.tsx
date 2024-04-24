import SliderBrands from "../components/slider-brand";

const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("section-contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="section-aboutme"
        className="text-gray-600 body-font bg-hero-pattern bg-repeat bg-secondary-dark bg-opacity-50 shadow-md md:mt-10"
      >
        <div className="container px-5 py-20 mx-auto md:mb-20 ">
          <div className="flex -mx-4 mb-10 text-justify bg-white/40 rounded-lg shadow-md">
            <div className="mb-10 mx-auto px-4 pt-10 w-[92%] md:w-2/3">
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
                to Web Development and Programming.
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
            <div className="mb-8 mx-auto px-4 text-center">
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-4">
                Mis habilidades y tecnologías
              </h2>
              <SliderBrands />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

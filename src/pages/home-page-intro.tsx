const HomePageIntro = () => {
  return (
    <>
      <section
        id="section-home"
        className="text-gray-600 body-font bg-white min-h-80"
      >
        <div className="container px-5 py-20 mx-auto md:mt-12 md:mb-20">
          <div className="flex flex-col-reverse md:flex-row -mx-4 -mb-12">
            <div className="md:w-3/6 mb-10 ml-auto px-3 ">
              <h2 className="title-font text-2xl md:text-3xl text-center md:text-start font-bold text-gray-900 mt-6 mb-3">
                Hola, soy Leonardo Osorio,
                <br /> Tecnólogo en Sistemas de información
              </h2>
              <p className="leading-relaxed text-lg text-center md:text-start">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>

              <div>
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1wWJXaQz_2KrZVMbMTSqHqApGZlZ6oSoH/view?usp=sharing",
                      "_blank"
                    )
                  }
                  className="flex lg:mx-1 mx-auto mt-6 text-white bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Descargar CV
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center md:mr-auto px-4 ">
              <div className="rounded-full h-60 w-60 overflow-hidden  mx-auto shadow-[0_25px_40px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg hover:scale-110 transition">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="src/assets/io.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageIntro;

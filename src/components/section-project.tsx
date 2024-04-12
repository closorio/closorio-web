const SectionProject = () => {
    return (
      <>
        <section className="text-gray-600 body-font min-h-60 border-4">
          <div className="container px-5 py-10 mx-auto">
              <div className="flex -mx-4 -mb-10 text-center">
                <div className="sm:w-1/2 mb-10 mx-auto px-4">
                  <div className="rounded-lg h-300 w-350 overflow-hidden mx-auto">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="https://dummyimage.com/500x300"
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Proyecto 1
                  </h2>
                  <p className="leading-relaxed text-base">
                    Descripción proyecto 1 Williamsburg occupy sustainable snackwave gochujang. Pinterest
                    cornhole brunch, slow-carb neutra irony.
                  </p>
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Ir al proyecto
                  </button>
                </div>
              </div>
              </div>
        </section>
      </>
    );
  };
  
  export default SectionProject;
  
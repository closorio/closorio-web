const Contact = () => {
  return (
    <>
      <section
        id="section-contact"
        className="text-gray-600 body-font min-h-80"
      >
        <div className="container flex flex-wrap md:flex-nowrap px-5 py-18 mx-auto md:mt-20 mt-15">
          <div className="md:w-1/2 bg-white rounded-lg p-8 flex flex-col justify-center md:ml-auto w-full mt-10 md:mt-0  text-center ">
            <div className="mb-10 mx-auto px-4">
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Contacto
              </h2>
              <p className="leading-relaxed text-base">
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </p>
            </div>
          </div>

          <div className=" md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full md:mt-0 mb-20 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

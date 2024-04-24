import CopyToClipboard from "../common/copy-to-clipboard";

const Contact = () => {
  return (
    <>
      <section
        id="section-contact"
        className="text-gray-600 body-font min-h-80 mb-6"
      >
        <div className="container flex px-5 py-18 mx-auto md:mt-20 mt-15 flex-col ">
          <div className=" md:w-1/2 mx-auto bg-white rounded-lg p-8 ml-auto text-center ">
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Contacto
            </h2>
            <p className="leading-relaxed text-base">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="flex px-5 py-5 mx-5 my-auto">
            <CopyToClipboard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

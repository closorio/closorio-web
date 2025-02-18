import { useState } from "react";

const HomePageIntro = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const email = "leonardo.clog@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      <section id="section-home" className="text-gray-600 body-font">
        <div className="custom-container md:py-20 mt-0">
          <div className="flex flex-col-reverse md:flex-row -mx-4 -mb-12">
            <div className="md:w-3/6 mb-10 md:ml-auto px-3">
              <h2 className="title-font text-xl md:text-2xl text-center md:text-start text-gray-900 mt-6 mb-3">
                Soy <strong>Leonardo Osorio</strong>,
                <br />{" "}
                <strong className="md:text-4xl">
                  Tecnólogo en Sistemas de información,
                </strong>
              </h2>
              <p className="leading-snug md:w-11/12 text-lg text-center text-slate-500 md:text-start">
                El arte, el diseño y la tecnología informática han sido mis
                pasiones desde siempre, y me llevaron a incursionar en el mundo de
                la programación y del diseño web, donde encuentro la satisfacción
                de crear soluciones digitales que impulsen el espíritu
                emprendedor.
              </p>

              <span className="flex flex-row justify-center md:justify-start py-5">
                <a
                  className="text-primary"
                  href="https://github.com/closorio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    strokeWidth="2"
                    className="w-10 h-10 transition duration-500 hover:scale-125 cursor-pointer"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo Github</title>
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z "></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-primary"
                  href="https://www.linkedin.com/in/closorio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    strokeWidth="2"
                    className="w-10 h-10 transition duration-500 hover:scale-125 cursor-pointer"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo Linkedin</title>
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                </a>

                <div className="relative inline-flex">
                  <button
                     data-tooltip-target="tooltip-bottom"
                     data-tooltip-placement="bottom"
                     type="button"
                     onClick={handleCopyClick}
                     className="ml-4 text-primary"
                     disabled={isCopied}
                  >
                    <span
                      id="default-message"
                      className="inline-flex items-center"
                    >
                      <svg
                        fill="currentColor"
                        strokeWidth="2"
                        className="w-10 h-10 transition duration-500 hover:scale-125 cursor-pointer"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Copiar email</title>
                        <polygon points="438.154,4.332 403.692,45.686 403.692,393.824 472.615,393.824 472.615,45.686" />
                        <rect
                          x="403.692"
                          y="413.519"
                          width="68.923"
                          height="59.077"
                        />
                        <path d="M0,0v472.615h374.154V0H0z M98.462,206.747v-19.692h177.231v19.692H98.462z M265.398,295.362l-78.321,56.764 l-78.321-56.764H265.398z M143.411,344.797l-54.796,54.796v-94.509L143.411,344.797z M102.539,413.516l57.018-57.018l27.52,19.945 l27.52-19.945l57.018,57.018H102.539z M285.538,399.592l-54.796-54.796l54.796-39.714V399.592z M324.923,147.67H49.231v-19.692 h275.692V147.67z M324.923,88.593H49.231V68.9h275.692V88.593z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id="tooltip-bottom"
                    role="tooltip"
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm whitespace-nowrap 
                  ${
                    isCopied ? "opacity-100" : "opacity-0"
                  } tooltip dark:bg-gray-700`}
                  >
                    <span id="default-tooltip-message">¡Email Copiado!</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </span>
            </div>

            <div className="flex-col items-center justify-center md:mr-auto md:mt-8 px-2">
              <div className="rounded-full h-40 w-40 md:h-60 md:w-60 overflow-hidden  mx-auto shadow-[0_25px_40px_-12px_rgba(0,0,0,0.6)]">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/static/io.png"
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

import { FC } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, alt }: ImageProps) => (
  <img
    alt={alt}
    className="object-cover object-center h-full w-full"
    src={src}
    style={{ aspectRatio: "16/9" }}
  />
);

interface SectionProjectProps {
  imageUrl: string;
  title: string;
  description: string;
  year: string;
  type: string;
  buttonText: string;
  url: string;
  badges: string[];
  githubUrl?: string;
}

const SectionProject: FC<SectionProjectProps> = ({
  imageUrl,
  title,
  description,
  year,
  type,
  buttonText,
  url,
  badges,
  githubUrl,
}: SectionProjectProps) => {
  // Mapeo de colores a estilos coherentes con las tecnologías
  const badgeStyles: { [key: string]: string } = {
    Docker: "bg-blue-100 text-blue-700 border-blue-300", 
    Figma: "bg-purple-100 text-purple-700 border-purple-300", 
    "Google Apps Script": "bg-green-100 text-green-700 border-green-300", 
    "Google API": "bg-blue-100 text-blue-700 border-blue-300",  
    "Google Workspace": "bg-blue-100 text-blue-700 border-blue-300", 
    Termux: "bg-black bg-opacity-10 text-gray-800 border-gray-400", 
    "Telegram API": "bg-blue-100 text-blue-600 border-blue-300",
    Inkscape: "bg-gray-100 text-gray-800 border-gray-400",
    Vercel: "bg-black bg-opacity-10 text-gray-900 border-gray-400", 
    Javascript: "bg-yellow-100 text-yellow-700 border-yellow-300", 
    Typescript: "bg-blue-100 text-blue-700 border-blue-300", 
    Express: "bg-gray-100 text-gray-800 border-gray-400", 
    "Tailwind CSS": "bg-cyan-100 text-cyan-700 border-cyan-300", 
    "Material UI": "bg-blue-100 text-blue-700 border-blue-300",
    Nodejs: "bg-green-100 text-green-700 border-green-300", 
    React: "bg-cyan-100 text-cyan-700 border-cyan-300", 
    "UI/UX Design": "bg-purple-100 text-purple-700 border-purple-300", 
    FastAPI: "bg-teal-100 text-teal-700 border-teal-300", 
    Python: "bg-blue-100 text-blue-700 border-blue-300", 
    Uvicorn: "bg-green-100 text-green-700 border-green-300", 
    "Google Cloud": "bg-blue-100 text-blue-700 border-blue-300", 
    TensorFlow: "bg-orange-100 text-orange-700 border-orange-300", 
    "Machine Learning": "bg-indigo-100 text-indigo-700 border-indigo-300", 
    "Deep Learning": "bg-purple-100 text-purple-700 border-purple-300", 
    "Computer Vision": "bg-red-100 text-red-700 border-red-300", 
  };

  return (
    <section className="text-gray-600 body-font bg-white border border-gray-200 rounded-lg shadow-lg md:mb-10 mb-8 md:w-16/10">
      <div className="container px-4 mx-auto">
        <div className="flex -mx-4 -mb-10 text-center flex-col md:flex-row">
          <div className="md:w-1/2 md:mb-10 mb-5">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  hover:shadow-black/30">
              <div className="rounded-lg  overflow-hidden">
                <div className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden ">
                    {" "}
                    <Image src={imageUrl} alt="content" />
                  </div>
                </div>
                <div className="absolute rounded-t-lg md:rounded-l-lg  inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="flex flex-col gap-3">
                    {buttonText && url && (
                      <button
                        onClick={() =>
                          window.open(url, "_blank", "noopener noreferrer")
                        }
                        className="flex mx-auto text-white bg-primary border-0 md:py-3 py-2 px-6 focus:outline-none hover:bg-green-400 rounded transition-all duration-300"
                      >
                        {buttonText}
                      </button>
                    )}

                    {githubUrl && (
                      <button
                        onClick={() =>
                          window.open(
                            githubUrl,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                        className="flex mx-auto items-center gap-2 text-white bg-gray-800 border-0 md:py-3 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Ver en GitHub
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mb-10 ml-6 text-left md:pt-4 pr-1 md:pr-4">
            <h2 className="title-font text-2xl font-bold text-gray-900 md:mt-4 mt-0 mb-3">
              {title}
            </h2>
            <span className="bg-black rounded-md text-white px-2 py-1 mr-6 ">
              {year}
            </span>
            <span className="text-gray-500 ">{type}</span>
            <div className="flex flex-wrap py-3 gap-x-1 gap-y-1">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded border ${badgeStyles[badge]}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="leading-relaxed text-base mb-4 py-1 md:mb-3 pr-3 overflow-hidden transition-all duration-500 ease-in-out max-h-24 md:max-h-36 hover:max-h-96">
              {description}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};
export default SectionProject;

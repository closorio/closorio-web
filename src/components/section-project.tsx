interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => (
  <img
    alt={alt}
    className="object-cover object-center h-full w-full"
    src={src}
    style={{ aspectRatio: "16/9" }} // Asegura que la imagen siempre tenga el mismo tamaño
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
}

const SectionProject = ({
  imageUrl,
  title,
  description,
  year,
  type,
  buttonText,
  url,
}: SectionProjectProps) => (
  <section className="text-gray-600 body-font bg-white border border-gray-200 rounded-lg shadow-lg md:mb-10 mb-8 ">
    <div className="container px-4 mx-auto">
      <div className="flex -mx-4 -mb-10 text-center flex-col md:flex-row">

        <div className="md:w-1/2 md:mb-10 mb-5">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  hover:shadow-black/30">
            <div className="rounded-lg  overflow-hidden">
              <div className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden ">
                  {" "}
                  {/* Asegura que la imagen sea responsiva */}
                  <Image src={imageUrl} alt="content" />
                </div>
              </div>
              <div className="absolute rounded-t-lg md:rounded-l-lg  inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button
                  children={buttonText}
                  onClick={() =>
                    window.open(url, "_blank", "noopener noreferrer")
                  }
                  className="flex mx-auto md:mt-6 mt-1 text-white bg-primary border-0 md:py-3 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mb-10 ml-6 text-left">
          <h2 className="title-font text-2xl font-bold text-gray-900 md:mt-4 mt-0 mb-3">
            {title}
          </h2>
          <span className="bg-black rounded-md text-white px-2 py-1 mr-6 ">{year}</span>
          <span className="text-gray-500 text-lg ">{type}</span>
          <p className="leading-relaxed text-base my-4">{description}</p>
        </div>
      </div>
      
    </div>
    <hr />
  </section>
);

export default SectionProject;

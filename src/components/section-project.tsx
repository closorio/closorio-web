interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => (
  <img
    alt={alt}
    className="object-cover object-center h-full w-full"
    src={src}
    style={{ aspectRatio: '16/9' }} // Asegura que la imagen siempre tenga el mismo tamaño
  />
);

interface SectionProjectProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  url: string;
}

const SectionProject = ({
  imageUrl,
  title,
  description,
  buttonText,
  url,
}: SectionProjectProps) => (
  <section className="text-gray-600 body-font bg-hero-pattern bg-repeat bg-secondary-dark bg-opacity-50 mb-10 shadow-lg ">
    <div className="container px-5 py-10 mx-auto">
      <div className="flex -mx-4 -mb-10 text-center">
        <div className="md:w-1/2 mb-10 mx-auto px-4">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="rounded-lg overflow-hidden mx-auto shadow-lg">
              <div className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden"> {/* Asegura que la imagen sea responsiva */}
                  <Image src={imageUrl} alt="content" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="title-font text-lg md:text-2xl font-bold text-white">
                  {title}
                </h1>
                <p className="mb-3 text-md md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {description}
                </p>
                <button
                  children={buttonText}
                  onClick={() => window.open(url, "_blank","noopener noreferrer")}
                  className="flex mx-auto md:mt-6 mt-1 text-white bg-primary border-0 md:py-3 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionProject;

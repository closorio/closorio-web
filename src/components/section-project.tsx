
interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => (
  <img
    alt={alt}
    className="object-cover object-center h-full w-full"
    src={src}
  />
);
interface SectionProjectProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;// Assuming buttonClick is a function that doesn't return anything
  url: string; // Agrega una nueva propiedad para la URL
}

const SectionProject = ({
  imageUrl,
  title,
  description,
  buttonText,
  url, // Asegúrate de pasar la URL como prop
}: SectionProjectProps) => (
  <section className="text-gray-600 body-font min-h-60 bg-secondary mb-5 shadow-inner border-4 border-solid border-white">
    <div className="container px-5 py-10 mx-auto">
      <div className="flex -mx-4 -mb-10 text-center">
        <div className="md:w-1/2 mb-10 mx-auto px-4">
          <div className="rounded-lg h-300 w-350 overflow-hidden mx-auto shadow-lg">
            <Image src={imageUrl} alt="content" />
          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{description}</p>
          <button
            children={buttonText}
            onClick={() => window.open(url, "_blank")} // Modifica el onClick para que abra la URL en una nueva pestaña
            className="flex mx-auto mt-6 text-white bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          />
        </div>
      </div>
    </div>
  </section>
);

export default SectionProject;


import { motion } from 'framer-motion';

const slides = [
  { brand: 'HTML', logo: 'public/static/carrousel-icons/html.svg' },
  { brand: 'CSS', logo: 'public/static/carrousel-icons/css.svg' },
	{ brand: 'JavaScript', logo: 'public/static/carrousel-icons/javascript.svg' },
  { brand: 'TypeScript', logo: 'public/static/carrousel-icons/typescript.svg' },
  { brand: 'React', logo: 'public/static/carrousel-icons/react.svg' },
  { brand: 'Nodejs', logo: 'public/static/carrousel-icons/nodejs.svg' },
  { brand: 'Tailwind', logo: 'public/static/carrousel-icons/tailwind.svg' },
  { brand: 'PostgreSQL', logo: 'public/static/carrousel-icons/postgresql.svg' },
  { brand: 'Git', logo: 'public/static/carrousel-icons/git.svg' },
  { brand: 'Github', logo: 'public/static/carrousel-icons/github.svg' },
  { brand: 'Docker', logo: 'public/static/carrousel-icons/docker.svg' },
  { brand: 'Jira Software', logo: 'public/static/carrousel-icons/jira.svg' },
  { brand: 'Figma', logo: 'public/static/carrousel-icons/figma.svg' },

  ];
  

// Duplica el array de slides para asegurar un bucle sin fin
const duplicatedSlides = [...slides, ...slides, ...slides];

const SliderBrands = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Div envolvente para el bucle sin fin */}
      <motion.div
        className="flex"
        animate={{
          x: ['-120%', '0%'],
          transition: { ease: 'linear', duration: 40, repeat: Infinity },
        }}
      >
        {/* Renderiza los slides duplicados */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/6 md:w-[7%]"
          >
            <div className="flex flex-col items-center px-1 md:py-4 py-2 justify-center h-full text-xl">
              <img src={slide.logo} alt={slide.brand} className="w-full h-full" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderBrands;

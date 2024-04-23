import { motion } from 'framer-motion';

const slides = [
  { brand: 'HTML', logo: 'src/assets/carrousel-icons/html.svg' },
  { brand: 'CSS', logo: 'src/assets/carrousel-icons/css.svg' },
	{ brand: 'JavaScript', logo: 'src/assets/carrousel-icons/javascript.svg' },
  { brand: 'TypeScript', logo: 'src/assets/carrousel-icons/typescript.svg' },
  { brand: 'React', logo: 'src/assets/carrousel-icons/react.svg' },
  { brand: 'Nodejs', logo: 'src/assets/carrousel-icons/nodejs.svg' },
  { brand: 'Tailwind', logo: 'src/assets/carrousel-icons/tailwind.svg' },
  { brand: 'PostgreSQL', logo: 'src/assets/carrousel-icons/postgresql.svg' },
  { brand: 'Git', logo: 'src/assets/carrousel-icons/git.svg' },
  { brand: 'Github', logo: 'src/assets/carrousel-icons/github.svg' },
  { brand: 'Docker', logo: 'src/assets/carrousel-icons/docker.svg' },
  { brand: 'Jira Software', logo: 'src/assets/carrousel-icons/jira.svg' },
  { brand: 'Figma', logo: 'src/assets/carrousel-icons/figma.svg' },

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
          x: ['-300%', '0%'],
          transition: { ease: 'linear', duration: 50, repeat: Infinity },
        }}
      >
        {/* Renderiza los slides duplicados */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${150 / slides.length}%` }}
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

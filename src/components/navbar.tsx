import { Link } from "react-scroll";
import { useState } from "react";
import Menu from "./menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white text-gray-600 body-font sticky top-0 z-20">
        <div className="container mx-auto flex p-4 lg:flex-row items-center font-bold ">
          <nav className=" hidden md:block md:ml-auto items-center text-base justify-center md:gap-x-4 ">
            <Link
              to="section-experience"
              className="mr-5 hover:text-primary cursor-pointer"
              smooth={true}
              offset={-40}
              duration={600}
            >
              Experiencia
            </Link>
            <Link
              to="section-projects"
              className="mr-5 hover:text-primary cursor-pointer"
              smooth={true}
              offset={-60}
              duration={600}
            >
              Proyectos
            </Link>
            <Link
              to="section-aboutme"
              className="mr-5 hover:text-primary cursor-pointer"
              smooth={true}
              offset={-80}
              duration={600}
            >
              Sobre mí
            </Link>
            <Link
              to="section-home"
              className="mr-5 hover:text-primary cursor-pointer"
              smooth={true}
              offset={-100}
              duration={600}
            >
              Inicio
            </Link>
          </nav>

          <nav className="md:hidden ml-auto px-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;

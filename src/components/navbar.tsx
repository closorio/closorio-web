import { Link } from "react-scroll";
import React, { useState } from "react";
import Menu from "./menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white text-gray-600 body-font sticky top-0 bg-slate-300 relative z-20 shadow-md">
        <div className="container mx-auto flex p-4 lg:flex-row items-center font-bold ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-2 lg:mb-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Leonardo Osorio</span>
          </a>

          <nav className=" hidden md:block md:ml-auto flex items-center text-base justify-center md:gap-x-4 ">
            <Link
              to="section-home"
              className="mr-5 hover:text-gray-900"
              smooth={true}
              offset={-80}
              duration={600}
            >
              INICIO
            </Link>
            <Link
              to="section-aboutme"
              className="mr-5 hover:text-gray-900"
              smooth={true}
              offset={-80}
              duration={600}
            >
              ACERCA DE
            </Link>
            <Link
              to="section-projects"
              className="mr-5 hover:text-gray-900"
              smooth={true}
              offset={-80}
              duration={600}
            >
              PROYECTOS
            </Link>
            <Link
              to="section-contact"
              className="mr-5 hover:text-gray-900"
              smooth={true}
              offset={-40}
              duration={600}
            >
              CONTACTO
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

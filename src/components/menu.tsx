import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const navmenu = [
  {
    name: "Experiencia",
    href: "#section-experience",
    icon: FingerPrintIcon,
  },
  {
    name: "Proyectos",
    href: "#section-projects",
    icon: SquaresPlusIcon,
  },
  {
    name: "Sobre mí",
    href: "#section-aboutme",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Inicio",
    href: "#section-home",
    icon: ChartPieIcon,
  },
];

const Menu = () => {
  return (
    <>
      <Popover className="relative z-30">
        <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
            <div
              className="w-screen max-w-52 flex-auto overflow-hidden text-sm bg-white leading-6 shadow-lg ring-1 ring-gray-900/5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {navmenu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <item.icon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;

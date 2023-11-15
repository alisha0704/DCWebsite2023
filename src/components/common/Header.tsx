import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [menuOpen2, setMenuOpen2] = useState(false);

  const toggleMenu2 = () => {
    setMenuOpen2(!menuOpen2); // Toggles the menuOpen state
  };
  const handleCloseModals = useCallback(() => {
    setMenuOpen(false);
    setShow(false);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModals();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleCloseModals]);

  const [show, setShow] = useState(false);
  const router = useRouter();
  const isLinkActive = (pathname: string) => {
    return router.pathname === pathname
      ? "border-t-2 border-b-2 text-white"
      : "text-gray-300 ";
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <header className="">
        <div className="">
          <div className=" lg:hidden bg-black opacity-75 flex">
            <Image
              src="/black n white logo 2.svg"
              alt="DC"
              width={75}
              height={75}
              className="py-4 px-2 pl-4"
            />
            <div className={monte.className}>
              <div className="text-white justify-center uppercase text-center pt-8 text-xl font-bold px-11">
                VIT Dance Club{" "}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-white absolute right-3 top-5"
            >
              <svg
                className={`fill-current h-8 w-8 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-8 w-8 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Hamburger ends */}
        <nav className="w-full backdrop-blur-3xl bg-black text-white ">
          <div className="container mx-auto flex flex-col lg:flex-row justify-center w-full h-full max-sm:hidden max-md:hidden">
            <div
              onClick={() => setMenuOpen(true)}
              className={
                "py-10 pr-12 mr-12 mt-4 Ssm:absolute Ssm:top-0 Ssm:left-0"
              }
            >
              <Image src="/icons/menu.svg" alt="MENU" width={30} height={30} />
            </div>
            <div className={" ${menuOpen ? 'block' : 'hidden'}"}>
              <Link href="/" className="flex justify-center items-center">
                <Image src="/vitdclogo.svg" alt="DC" width={200} height={200} />
              </Link>
            </div>
            <div className="py-10">
              <ul className="flex flex-col lg:flex-row mt-4 text-white sm:gap-2  lg:gap-20 lg:text-xl">
                <li>
                  <Link href="/" className="">
                    <div
                      className={`w-30 h-5 text-gray-300  text-base font-semibold p-[1rem]  text-center uppercase leading-3 tracking-widest hover:text-white flex justify-center items-center
                    ${isLinkActive("/")}`}
                    >
                      <p>Home</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/Gallery">
                    <div
                      className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest  flex justify-center items-center p-[1rem]
                  hover:text-white ${isLinkActive("/Gallery")}`}
                    >
                      <p>Gallery</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/Events">
                    <div
                      className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest flex justify-center items-center p-[1rem]
                    hover:text-white ${isLinkActive("/Events")}`}
                    >
                      <p>Events</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/Achievements">
                    <div
                      className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest flex justify-center items-center p-[1rem]
                    hover:text-white ${isLinkActive("/Achievements")}`}
                    >
                      <p>Achievements</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <div
                    onClick={() => setShow(true)}
                    className={`w-30 h-5 text-gray-300  text-center text-base font-semibold uppercase leading-3 tracking-widest flex justify-center items-center p-[1rem]
                  hover:text-white`}
                  >
                    <p>Contact us</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`w-full block flex-grow ${isOpen ? "block" : "hidden"}`}
          >
            <div className={monte.className}>
              <div className="text-sm lg:flex-grow text-center py-1 pb-4">
                <a
                  href=" / "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  HOME
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Gallery "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  GALLERY
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Events "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  EVENTS
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Achievements "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  ACHIEVEMENTS
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Journey "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  JOURNEY OF DC
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Notablealumni "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  NOTABLE ALUMNIS
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />

                <a
                  href="/Board "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  THE BOARD OF DANCE CLUB
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Faculty "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  FACULTY COORDINATORS
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Developers "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  DEVELOPER TEAM
                </a>

                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <a
                  href="/Studio "
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  OUR STUDIO
                </a>
                <hr className="w-2/3 h-0.5 mx-auto bg-gray-500 border-0 rounded my-1" />
                <div
                  onClick={() => setShow(true)}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  CONTACT US
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </nav>

        {/*Right slider */}
        <Transition.Root show={show}>
          <BackgroundLayer />
          <SlideOverLayer>
            <div onClick={() => setShow(false)} className="">
              <div className="flex">
                <Image
                  src="/icons/cross.png"
                  alt="X"
                  height={18}
                  width={18}
                  className="ml-2 lg:ml-20"
                />
                <div className="lg:ml-16 h-5 max-sm:text-left max-sm:px-6 text-lg font-black uppercase">
                  Contact Us
                </div>
              </div>
              <hr className="w-2/3 h-0.5 mx-auto bg-white border-0 rounded my-4 max-sm:w-3/4 max-sm:mx-auto" />
              <div className="px-20 uppercase font-bold max-sm:px-8">
                NOTE: contact us for collaboration, fest invites, events and
                queries
              </div>
              <div className="px-20 uppercase font-bold max-sm:px-8 pt-4">
                mail us
              </div>
              <hr className="w-2/3 h-0.5 mx-auto bg-white border-0 rounded my-1 max-sm:w-3/4 max-sm:mx-auto" />
              <Link href="https://www.instagram.com/vitdanceclub/">
                <div className="px-20 uppercase font-bold max-sm:px-8 pt-4">
                  visit instagram
                </div>
              </Link>
              <hr className="w-2/3 h-0.5 mx-auto bg-white border-0 rounded my-1 max-sm:w-3/4 max-sm:mx-auto" />
              <Link href="https://www.youtube.com/@vitdanceclub9231">
                <div className="px-20 uppercase font-bold max-sm:px-8 pt-4">
                  visit YouTube
                </div>
              </Link>
              <hr className="w-2/3 h-0.5 mx-auto bg-white border-0 rounded my-1 max-sm:w-3/4 max-sm:mx-auto" />
              <div className="px-20 uppercase font-bold max-sm:px-8">phone</div>
              <div className="px-20 uppercase font-bold max-sm:px-8">
                +91 9840466868
              </div>
              <div className="px-20 uppercase font-bold max-sm:px-8">
                +91 8078281652
              </div>
            </div>
          </SlideOverLayer>
        </Transition.Root>
        {/* Left Slider */}
        <Transition.Root show={menuOpen}>
          <BackgroundLayer />
          <SlideOverLayerLeft>
            <div className="" onClick={handleCloseModals}>
              <div
                onClick={() => setShow(false)}
                className="flex w-full justify-between items-center"
              >
                {" "}
                <div className="text-lg font-black uppercase leading-3 tracking-widest py-[1rem]">
                  menu
                </div>
                <Image
                  src="/icons/cross.png"
                  alt="X"
                  height={15}
                  width={15}
                  className=""
                />
              </div>
              <hr className="w-full h-0.5 mt-1 bg-white border-0 rounded" />
            </div>
            <Link href="/Journey">
              <div className="px-8 pt-5 pb-3 uppercase font-bold">
                journey of dc
              </div>
            </Link>
            <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />
            <Link href="/Notablealumni">
              <div className="px-8 pt-5 pb-3 uppercase font-bold">
                notable alumnis
              </div>
            </Link>
            <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />
            <Link href="/Board">
              <div className="px-8 pt-5 pb-3 uppercase font-bold ">
                the board of dance club
              </div>
            </Link>
            <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />
            <Link href="/Faculty">
              <div className="px-8 pt-5 pb-3 uppercase font-bold">
                faculty coordinators
              </div>
            </Link>
            <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />
            <Link href="/Developers">
              <div className="px-8 pt-5 pb-3 uppercase font-bold">
                developer team
              </div>
            </Link>
            <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />

            <Link href="/Studio">
              <div className="px-8 pt-5 pb-3 uppercase font-bold">
                our studio
              </div>
            </Link>
          </SlideOverLayerLeft>
        </Transition.Root>
      </header>
    </>
  );
};

const BackgroundLayer: React.FC = () => (
  <Transition.Child
    enter="transition-opacity ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 opacity-75" />
  </Transition.Child>
);

interface SlideOverLayerProps {
  children: React.ReactNode;
}

const SlideOverLayer: React.FC<SlideOverLayerProps> = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <div className="z-[150] fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-48">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="bg-black opacity-80 text-white py-6 shadow-xl h-screen items-center place-items-center w-full">
              <div className="">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);
const SlideOverLayerLeft: React.FC<SlideOverLayerProps> = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="-translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-50"
    leaveFrom="translate-x-0"
    leaveTo="-translate-x-full"
  >
    <div className="z-[150] fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 -left-10 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="bg-black opacity-80 text-white py-6 shadow-xl h-screen items-center place-items-center">
              <div className="bg-black px-5">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);

export default Header;

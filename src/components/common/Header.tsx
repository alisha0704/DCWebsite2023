import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Header = () => {
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

  return (
    <header className="">
      <nav className="w-full  bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-center w-full h-full ">
          <div
            onClick={() => setMenuOpen2(!menuOpen2)}
            className="py-10 pr-4 md:pr-12 mr-4 md:mr-12 mt-4 cursor-pointer md:hidden"
          >
            <Image src="/icons/menu.svg" alt="MENU" width={30} height={30} />
          </div>
          <div
            onClick={() => setMenuOpen(true)}
            className={"py-10 pr-12 mr-12 mt-4"}
          >
            <Image src="/icons/menu.svg" alt="MENU" width={30} height={30} />
          </div>
          <div className={"px-10 ${menuOpen ? 'block' : 'hidden'}"}>
            <Link href="/">
              <Image src="/vitdclogo.svg" alt="DC" width={200} height={200} />
            </Link>
          </div>
          <div className="py-10">
            <ul className="flex flex-col md:flex-row mt-4 text-white gap-20 text-xl">
              <li>
                <Link href="/">
                  <div
                    className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest hover:text-white
                    ${isLinkActive("/")}`}
                  >
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Gallery">
                  <div
                    className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest 
                  hover:text-white ${isLinkActive("/Gallery")}`}
                  >
                    Gallery
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Events">
                  <div
                    className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest
                    hover:text-white ${isLinkActive("/Events")}`}
                  >
                    Events
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Achievements">
                  <div
                    className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest
                    hover:text-white ${isLinkActive("/Achievements")}`}
                  >
                    Achievements
                  </div>
                </Link>
              </li>
              <li>
                <div
                  onClick={() => setShow(true)}
                  className={`w-30 h-5 text-gray-300  text-center text-base font-semibold uppercase leading-3 tracking-widest
                  hover:text-white`}
                >
                  Contact us
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*Right slider */}
      <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <div className="">
            <div onClick={() => setShow(false)} className="flex">
              <Image src="/icons/cross.png" alt="X" height={15} width={15} />
              <div className="w-full h-5 left-[92px] top-[43px] text-center text-lg font-black uppercase">
                Contact Us
              </div>
            </div>
            <hr className="w-2/3 h-0.5 mx-auto bg-white border-0 rounded my-4" />
            <div className="px-20 uppercase font-bold">
              NOTE: contact us for collaboration, fest invites, events and
              queries
            </div>
            <div className="px-28 pt-5 pb-3 uppercase font-bold">mail us</div>
            <hr className="w-1/2 h-0.5 mx-24 bg-gray-500 border-0 rounded" />
            <div className="px-28 pt-5 pb-3 uppercase font-bold">
              visit instagram
            </div>
            <hr className="w-1/2 h-0.5 mx-24 bg-gray-500 border-0 rounded" />
            <div className="px-28 pt-5 pb-3 uppercase font-bold">
              visit YouTube
            </div>
            <hr className="w-1/2 h-0.5 mx-24 bg-gray-500 border-0 rounded" />
            <div className="px-28 pt-5 uppercase font-bold">phone</div>
            <div className="px-28 uppercase font-bold">+91 9840466868</div>
            <div className="px-28 uppercase font-bold">+91 8078281652</div>
          </div>
        </SlideOverLayer>
      </Transition.Root>
      {/* Left Slider */}
      <Transition.Root show={menuOpen}>
        <BackgroundLayer />
        <SlideOverLayerLeft>
          <div className="" onClick={handleCloseModals}>
            <div onClick={() => setShow(false)} className="flex">
              {" "}
              <div className="text-lg font-black uppercase leading-3 tracking-widest">
                menu
              </div>
              <Image
                src="/icons/cross.png"
                alt="X"
                height={20}
                width={20}
                className=""
              />
            </div>
            <hr />
            <Link href="/Board">
              <div className="w-64 h-6 left-[10px] top-[129px] font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
                The board 2023
              </div>
            </Link>
            <Link href="/Board">
              <div className="w-64 h-6 left-[10px] top-[198px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
                faculty coordinators
              </div>
            </Link>
            <Link href="/">
              <div className="w-64 h-6 left-[10px] top-[267px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
                developer team
              </div>
            </Link>
            <Link href="/">
              <div className="w-64 h-6 left-[10px] top-[336px]  text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
                studio
              </div>
            </Link>
            <Link href="/Journey">
              <div className="w-64 h-6 left-[10px] top-[406px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
                journey of dc
              </div>
            </Link>
            <Link href="/">
              <div className="w-64 h-6 left-[10px] top-[476px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
                Notable alumnis
              </div>
            </Link>
            {/* <div className="w-96 left-44 h-px top-[233px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[302px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[372px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[442px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[164px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[76px] absolute border border-white"></div> */}
          </div>
        </SlideOverLayerLeft>
      </Transition.Root>
    </header>
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
            <div className="bg-black opacity-80 text-white py-6 shadow-xl h-screen items-center place-items-center">
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
          <div className="pointer-events-auto w-screen max-w-2xl">
            <div className="bg-black opacity-80 text-white py-6 shadow-xl h-screen items-center place-items-center">
              <div className="bg-black">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);

export default Header;

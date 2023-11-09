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
  
   const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <header className="">
      <nav className="w-full backdrop-blur-3xl bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-center w-full h-full ">
         
          <div
            onClick={() => setMenuOpen(true)}
            className={"py-10 pr-12 mr-12 mt-4 Ssm:absolute Ssm:top-0 Ssm:left-0"}
          >
            <Image src="/icons/menu.svg" alt="MENU" width={30} height={30} />
          </div>
          <div className={" ${menuOpen ? 'block' : 'hidden'}"}>
            <Link href="/" className="flex justify-center items-center">
              <Image src="/vitdclogo.svg" alt="DC" width={200} height={200} />
            </Link>
          </div>
          <div className="py-10">
            <ul className="flex flex-col md:flex-row mt-4 text-white Ssm:gap-2 lg:gap-20 text-xl">
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
                  <p>
                  Contact us
                  </p>
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
          <div  onClick={() => setShow(false)} className="">
            <div className="flex">
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
            <Link href="https://www.instagram.com/vitdanceclub/" >
            <div className="px-28 pt-5 pb-3 uppercase font-bold">
              visit instagram
            </div>
            </Link>
            <hr className="w-1/2 h-0.5 mx-24 bg-gray-500 border-0 rounded" />
            <Link href="https://www.youtube.com/@vitdanceclub9231" >
            <div className="px-28 pt-5 pb-3 uppercase font-bold">
              visit YouTube
            </div>
            </Link>
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
            <div onClick={() => setShow(false)} className="flex w-full justify-between items-center">
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
          <Link href="/Board">
            <div className="px-8 pt-5 pb-3 uppercase font-bold mt-6">
              the board 2023
            </div>
          </Link>
          <Link href="/Achievements">
                  <div
                    className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest flex justify-center items-center p-[1rem]
                    hover:text-white ${isLinkActive("/Achievements")}`}
                  >
                    <p>Achievements</p>
                  </div>
                </Link>
          <Link href="/Gallery">
                  <div
                    className={`w-30 h-5 text-gray-300 text-center text-base font-semibold uppercase leading-3 tracking-widest  flex justify-center items-center p-[1rem]
                  hover:text-white ${isLinkActive("/Gallery")}`}
                  >
                     <p>Gallery</p>
                  </div>
                </Link>
          <Link href="/" className="">
                  <div
                    className={`w-30 h-5 text-gray-300  text-base font-semibold p-[1rem]  text-center uppercase leading-3 tracking-widest hover:text-white flex justify-center items-center
                    ${isLinkActive("/")}`}
                  >
                    <p>Home</p>
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
          <Link href="/Notablealumni">
            <div className="px-8 pt-5 pb-3 uppercase font-bold">
              notable alumnis
            </div>
          </Link>
          <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />
          <Link href="/Journey">
            <div className="px-8 pt-5 pb-3 uppercase font-bold">
              journey of dc
            </div>
          </Link>
          <hr className="w-10/12 h-0.5 mx-3 bg-gray-500 border-0 rounded" />
          <Link href="/Studio">
            <div className="px-8 pt-5 pb-3 uppercase font-bold">our studio</div>
          </Link>
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
          <div className="pointer-events-auto w-screen max-w-md w-screen">
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
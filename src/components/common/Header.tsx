import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black pt-8 pb-4">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black text-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <Image
            src="/black n white logo 2.svg.png"
            alt="logo"
            width={25}
            height={25}
          />
        </a>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 justify-evenly gap-12`}
        >
          <li>
            <a className=" text-gray-400 hover:text-white" href=" / ">
              <Image src="/MENU.svg" alt="logo" width={25} height={25} />
            </a>
          </li>
          <li>
            <a className=" text-gray-400 hover:text-white" href=" / ">
              <Image
                src="/black n white logo 2.svg"
                alt="logo"
                width={75}
                height={75}
              />
            </a>
          </li>

          <li>
            <a className=" text-gray-400 hover:text-white" href=" / ">
              HOME
            </a>
          </li>
          <li>
            <a className=" text-gray-400 hover:text-white" href="Gallery">
              GALLERY
            </a>
          </li>
          <li>
            <a className=" text-gray-400 hover:text-white" href="Events">
              EVENTS
            </a>
          </li>
          <li>
            <a className=" text-gray-400 hover:text-white" href="Achievements">
              ACHIEVEMENTS
            </a>
          </li>
          <li>
            <a className=" text-gray-400 hover:text-white" href="Contactus">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

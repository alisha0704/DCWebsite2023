import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-black pt-4">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 ${
            menuOpen ? "flex" : "hidden"
          } md:flex md:justify-center md:flex-row`}
        >
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-2xl   font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline"
            >
              <span className="text-white">Dropdown</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path fill-rule="evenodd" d="..." />
              </svg>
            </button>
            <div
              className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${
                menuOpen ? "animate-slide-down" : "hidden"
              }`}
            >
              <div className="px-2 py-2 bg-black rounded-md shadow">
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  THE BOARD 2023
                </a>
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                 FACULTY COORDINATORS  
                </a>
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  DEVELOPER TEAM 
                </a>
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  BOARD HISTORY
                </a>
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  JOURNEY OF DC 
                </a>
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  NOTABLE ALUMNIS  
                </a>
              </div>
            </div>
          </div>

          {/* Dropdown ends and navbar starts */}

          <a
            className="text-white px-4 py-2 mt-2 text-2xl font-semibold rounded-lg md:mt-0 transition duration-200 hover:text-white"
            href="#"
          >
            HOME
          </a>
          <a
            className="text-white px-4 py-2 mt-2 text-2xl font-semibold rounded-lg md:mt-0 transition duration-200 hover:text-white"
            href="#"
          >
            GALLERY
          </a>
          <a
            className="text-white px-4 py-2 mt-2 text-2xl font-semibold rounded-lg md:mt-0 transition duration-200 hover:text-white"
            href="#"
          >
            EVENTS
          </a>
          <a
            className="text-white px-4 py-2 mt-2 text-2xl font-semibold rounded-lg md:mt-0 transition duration-200 hover:text-white"
            href="#"
          >
            ACHIEVEMENTS
          </a>
          <a
            className="text-white px-4 py-2 mt-2 text-2xl font-semibold rounded-lg md:mt-0 transition duration-200 hover:text-white"
            href="#"
          >
            CONTACT US
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;

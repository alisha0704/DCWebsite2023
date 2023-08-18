import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="w-full bg-black text-white">
        <div className="container mx-auto flex flex-row justify-center w-full h-full ">
          <div className="">
            <Link href="/">
              <Image
                src="/vitdclogo.svg"
                alt="DC"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="py-8">
          <ul className="flex flex-row mt-4 text-white gap-20 text-xl">
            <ul className="flex flex-row mt-4 text-white gap-20 text-xl">
              <li>
                <Link href="/">
                  <div className="w-48 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    HOME
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Gallery">
                  <div className="w-24 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    GALLERY
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Events">
                  <div className="w-28 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    events
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/Achievements">
                  <div className="w-44 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    ACHIEVEMENTS
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/ContactUs">
                  <div className="w-48 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    COntact us
                  </div>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

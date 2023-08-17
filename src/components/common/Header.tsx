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
      <nav className="w-full bg-gray-800 text-white pt-4 pb-6">
        <div className="container mx-auto flex flex-row justify-center p-2">
          <div className="pr-32">
            <Link href="/">
              <Image
                src="/black n white logo 2.svg"
                alt="DC"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <ul className="flex flex-row mt-4 text-white gap-20 text-xl">
            <ul className="flex flex-row mt-4 text-white gap-20 text-xl">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/Gallery">GALLERY</Link>
              </li>
              <li>
                <Link href="/Events">EVENTS</Link>
              </li>
              <li>
                <Link href="/Achievements">ACHIEVEMENTS</Link>
              </li>
              <li>
                <Link href="/ContactUs">CONTACT US</Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

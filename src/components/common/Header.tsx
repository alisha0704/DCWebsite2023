import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex h-32 text-white bg-black body-font w-screen relative items-center">
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-around">
          <Image
            src="/black n white logo 2.svg"
            width={50}
            height={50}
            alt="DC LOGO"
          />

          <Link href="/"> Home </Link>
          <Link href="/gallery"> Gallery </Link>
          <Link href="/events"> Events </Link>
          <Link href="/achievements"> Achievements </Link>
          <Link href="/contact"> Contact Us </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

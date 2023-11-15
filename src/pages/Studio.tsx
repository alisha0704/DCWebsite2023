import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });
type StudioProps = {};

const Studio: React.FC<StudioProps> = () => {
  return (
    <>
      <div className="backdrop-blur-2xl relative ">
        <Link
          href="/"
          className="absolute hidden lg:block text-white mt-14 pt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="xl:w-full w-full mx-auto text-left border-solid border-white py-14">
        <div className="text-center font-extrabold tracking-wider uppercase text-lg md:text-4xl py-3">
          our studio  
        </div>
          <div className="text-center text-gray-400 text-md mb-2 md:mb-8 md:px-14">
            Our college dance club is proud to have state-of-the-art facilities
            and infrastructure that provide the perfect stage for dancers to
            shine.It&apos;s a space where creativity, artistry, and camaraderie
            flourish, and where students can explore their passion for dance to
            the fullest. Our dance studio features:
          </div>
          <div className="text-center font-bold text-white text-sm md:text-md tracking-wide leading-10 mb-6">
          <div className={monte.className}>  CHANGING AND REST AREAS | SPACIOUS DANCE FLOOR | MIRRORED WALLS |
            STORAGE SPACE | HIGH-QUALITY SOUND SYSTEM </div>
          </div>
          <div className="flex max-sm:px-6 justify-center">
            <Image src="/studio.png" alt="Gallery" width={1000} height={300} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Studio;

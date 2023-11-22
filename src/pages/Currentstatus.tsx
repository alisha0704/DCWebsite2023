import React from "react";
import Image from "next/image";
import Link from "next/link";

const Currentstatus = () => {
  return (
    <>
      <div className="backdrop-blur-2xl relative">
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
        <div className="xl:w-full lg:w-9/10 w-full mx-auto text-left border-solid border-white px-2 md:px-4 py-14">
          <div className="text-center text-white text-2xl lg:text-4xl px-4 font-bold md:mb-2 tracking-wide">
            <div className=""> CURRENT STATUS OF DANCE CLUB </div>
          </div>

          <hr className="w-3/4 h-0.5 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="https://www.instagram.com/vitdanceclub/">
              <Image
                src="/Status/Status1.png"
                alt=""
                width={1000}
                height={300}
              />
            </Link>
            <Link href="https://www.youtube.com/@vitdanceclub9231">
              <Image
                src="/Status/Status2.png"
                alt=""
                width={1000}
                height={300}
              />
            </Link>
            <Image src="/Status/status3.png" alt="" width={1000} height={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Currentstatus;

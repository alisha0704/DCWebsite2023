import React, { useEffect, useState } from "react";
import Image from "next/image";
import FullpageLoader from "@/components/common/FullpageLoader";
import Footer from "@/components/common/Footer";
import Link from "next/link";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
    return () => {
      sessionStorage.removeItem("scrollPosition");
    };
  }, []);
  return (
    <>
      <div className="backdrop-blur-xl relative ">
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
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="xl:w-full lg:w-9/10 w-full mx-auto text-left border-solid border-white px-14 py-14">
          <div className="text-center text-white text-2xl md:text-4xl lg:text-5xl px-4 font-normal leading-10 md:mb-4">
            The Gallery
          </div>
          <div className="text-center text-gray-400 text-md md:text-lg lg:text-xl font-normal px-4 leading-10 mb-8">
            A room to witness a glimpse of our performances and styles
          </div>
          <div className="flex max-sm:px-6 justify-center">
            <Image
              src="/GalleryImage.png"
              alt="Gallery"
              width={1000}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

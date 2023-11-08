import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 21;

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : numberOfImages - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < numberOfImages - 1 ? prevIndex + 1 : 0
    );
  };

  const imagePaths = [
    "/NotableAlumni/Group 141.svg",
    "/NotableAlumni/Group 153.svg",
    "/NotableAlumni/Group 160.svg",
    "/NotableAlumni/Group 144.svg",
    "/NotableAlumni/Group 146.svg",
    "/NotableAlumni/Group 161.svg",
    "/NotableAlumni/Group 143.svg",
    "/NotableAlumni/Group 147.svg",
    "/NotableAlumni/Group 148.svg",
    "/NotableAlumni/Group 149.svg",
    "/NotableAlumni/Group 150.svg",
    "/NotableAlumni/Group 145.svg",
    "/NotableAlumni/Group 152.svg",
    "/NotableAlumni/Group 151.svg",
    "/NotableAlumni/Group 159.svg",
    "/NotableAlumni/Group 142.svg",
    "/NotableAlumni/Group 158.svg",
    "/NotableAlumni/Group 154.svg",
    "/NotableAlumni/Group 155.svg",
    "/NotableAlumni/Group 157.svg",
    "/NotableAlumni/Group 156.svg",
  ];

  return (
    <>
     <div className="backdrop-blur-2xl backdrop-brightness-100">
      <Link href="/" className="absolute hidden lg:block text-white mt-14 pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <div className="py-10">
        <div className="text-center font-bold tracking-wider uppercase text-lg md:text-2xl">
          Notable Alumnis
        </div>
        <div className="text-center font-medium text-xs md:text-sm px-2 text-gray-400  md:pb-10">
          Check out the list of our notable Alumni who are on top of their Passion
        </div>
      </div>
      <div className="pb-10">
        <div className="mx-auto relative px-[2vw]">
          <div className="relative overflow-hidden rounded-lg" id="slideshow-container">
            {imagePaths.map((path, index) => {
              return (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === activeIndex ? "block" : "hidden"
                  } flex`}
                  data-carousel-item={
                    index === activeIndex ? "active" : undefined
                  }
                >
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[index % 21]}
                      alt={`Image ${index}`}
                      width={150}
                      height={150}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 1) % 21]}
                      alt={`Image ${index + 1}`}
                      width={250}
                      height={250}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 2) % 21]}
                      alt={`Image ${index + 2}`}
                      width={350}
                      height={350}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 3) % 21]}
                      alt={`Image ${index + 3}`}
                      width={250}
                      height={250}
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 4) % 21]}
                      alt={`Image ${index + 4}`}
                      width={150}
                      height={150}
                      className=""
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="absolute top-0 left-60 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrevClick}
          >
            <Image
              src="/chevron-left.svg"
              alt="Left arrow"
              width={50}
              height={50}
              
            />
          </button>

          <button
            type="button"
            className="absolute top-0 right-60 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNextClick}
          >
            <Image
              src="/chevron-right.svg"
              alt="Right arrow"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Slideshow;

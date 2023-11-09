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
    "/NotableAlumni/Shirish.svg",
    "/NotableAlumni/Bharath.svg",
    "/NotableAlumni/Poornima.svg",
    "/NotableAlumni/AmrithaK.svg",
    "/NotableAlumni/Khyati.svg",
    "/NotableAlumni/Ashwathy.svg",
    "/NotableAlumni/Adi.svg",
    "/NotableAlumni/Ansh.svg",
    "/NotableAlumni/Geethanjali.svg",
    "/NotableAlumni/Krishna.svg",
    "/NotableAlumni/Aastha.svg",
    "/NotableAlumni/Meher.svg",
    "/NotableAlumni/Neeraja.svg",
    "/NotableAlumni/Sreenidhi.svg",
    "/NotableAlumni/Vaibhav.svg",
    "/NotableAlumni/vidisha.svg",
    "/NotableAlumni/Amreeta.svg",
    "/NotableAlumni/Dalia.svg",
    "/NotableAlumni/Prekshi.svg",
    "/NotableAlumni/Soumi.svg",
    "/NotableAlumni/Vaishnavi.svg",
  ];
  const imageLinks = [
    "https://instagram.com/twinnoxx?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/bharath_kanth?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/poornima_ravii?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/am.ri_tha?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/dance678withkhyati?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/__twirls__?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/adipadi24?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/anshgv_?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/geethuajith?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/_._krishna_._04?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/aasthaassingh?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/meher.kathak?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/neeraja_nair__?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/naatya_?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/vaibhav_murugesan?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/vidishhaaaa?igshid=NzZlODBkYWE4Ng==",
    "",
    "https://instagram.com/worldofdalia?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/prekshi.vyas?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/soumiihazraa?igshid=NzZlODBkYWE4Ng==",
    "https://instagram.com/vaishnavi_____shukla?igshid=NzZlODBkYWE4Ng==",
  ]

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
        <div className="text-center font-bold tracking-wider uppercase text-lg md:text-4xl">
          Notable Alumnis
        </div>
        <div className="text-center font-medium text-md max-sm:text-sm px-2 text-gray-400  md:pb-10">
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
                    <Link href={imageLinks[index % 21]}>
                    <Image
                      src={imagePaths[index % 21]}
                      alt={`Image ${index}`}
                      width={250}
                      height={250}
                      className=""
                    />
                    </Link>
                  </div>
                  <div className="flex items-center">
                  <Link href={imageLinks[(index+1) % 21]}>
                    <Image
                      src={imagePaths[(index + 1) % 21]}
                      alt={`Image ${index + 1}`}
                      width={350}
                      height={350}
                      className=""
                    />
                    </Link>
                  </div>
                  <div className="flex items-center">
                  <Link href={imageLinks[(index+2) % 21]}>
                    <Image
                      src={imagePaths[(index + 2) % 21]}
                      alt={`Image ${index + 2}`}
                      width={450}
                      height={450}
                      className=""
                    />
                    </Link>
                  </div>
                  <div className="flex items-center">
                  <Link href={imageLinks[(index+3) % 21]}>
                    <Image
                      src={imagePaths[(index + 3) % 21]}
                      alt={`Image ${index + 3}`}
                      width={350}
                      height={350}
                      className=""
                    />
                    </Link>
                  </div>
                  <div className="flex items-center">
                  <Link href={imageLinks[(index+4) % 21]}>
                    <Image
                      src={imagePaths[(index + 4) % 21]}
                      alt={`Image ${index + 4}`}
                      width={250}
                      height={250}
                      className=""
                    />
                    </Link>
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

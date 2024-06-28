import React, { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 4;

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
    "/Carousel/Rectangle 64.png",
    "/Carousel/IMAGE.svg",
    "/Carousel/IMG_20220922_215922 1.png",
    "/Carousel/IMAGE.png",
  ];

  const imageText = ["Welcome to", "Welcome to", "Welcome to", "The"];

  const imageTextLast = [
    "VIT DANCE CLUB",
    "VIT DANCE CLUB",
    "VIT DANCE CLUB",
    "Board",
  ];

  const imageTextsubheading = [
    "VIT Dance Club is functioning under Office of Students' Welfare, Vellore Institute of Technology, Vellore, Tamil Nadu",
    "VIT Dance Club is functioning under Office of Students' Welfare, Vellore Institute of Technology, Vellore, Tamil Nadu",
    "VIT Dance Club is functioning under Office of Students' Welfare, Vellore Institute of Technology, Vellore, Tamil Nadu",
    " ",
  ];

  const imageTexts = [
    "VIT Dance Club provides opportunities for dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
    "VIT Dance Club provides opportunities for dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
    "VIT Dance Club provides opportunities for dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
    "Presenting, the Board of Dance Club 2023-24. Know more about the DC Board Members who are the prime backbone of this dance crew",
  ];

  return (
    <div className="relative  rounded-l-md rounded-r-md backdrop-filter backdrop-blur-xl backdrop-brightness-200 md:px-12 md:py-16 my-10 ">
      <div className="relative h-full overflow-hidden rounded-lg">
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : undefined}
          >
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src={path}
                alt={`Image ${index + 1}`}
                width={1000}
                height={1000}
                className=""
              />
              <div className="relative left-0 w-full text-center md:p-4 backdrop-blur-2xl bg-opacity-50">
                <div className="flex text-center justify-center">
                  <div className={monte.className}>
                    <p className="py-2 text-white font-medium text-lg md:text-2xl lg:text-5xl text-center">
                      {imageText[index]}
                    </p>
                  </div>
                  <div className={monte.className}>
                    <p className="py-2 text-white font-extrabold text-lg md:text-2xl lg:text-5xl  text-center px-2">
                      {imageTextLast[index]}
                    </p>
                  </div>
                </div>
                <div className={monte.className}>
                  <p className="py-2 text-white font-semibold text-lg md:text-xl lg:text-2xl  text-center px-2">
                    {imageTextsubheading[index]}
                  </p>
                </div>
                <p className="text-white font-medium text-sm md:text-xl">
                  {imageTexts[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute -left-4 -top-20 z-28  md:-top-20 md:left-0 md:z-28 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <Image
          src="/chevron-left.svg"
          alt="Left arrow"
          width={60}
          height={60}
          className="max-sm:w-1/3"
        />
      </button>

      <button
        type="button"
        className="absolute -right-4 -top-20 z-28  md:-top-20 md:right-0 md:z-28 flex items-center justify-center h-full max-sm:h-1/2 max-sm:top-4  cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <Image
          src="/chevron-right.svg"
          alt="Right arrow"
          width={60}
          height={60}
          className="max-sm:w-1/3"
        />
      </button>
    </div>
  );
};

export default Slideshow;

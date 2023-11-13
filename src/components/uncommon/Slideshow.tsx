import React, { useState } from "react";
import Image from "next/image";

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

  const imageTexts = [
    "The VIT Dance Club provides opportunities to dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
    "The VIT Dance Club provides opportunities to dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
    "The VIT Dance Club provides opportunities to dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
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
                  <p className="py-2 text-white font-medium text-sm md:text-2xl lg:text-5xl text-center">
                    {imageText[index]}
                  </p>
                  <p className="py-2 text-white font-extrabold text-sm md:text-2xl lg:text-5xl  text-center px-2">
                    {imageTextLast[index]}
                  </p>
                </div>
                <p className="text-white font-medium text-xs md:text-lg">
                  {imageTexts[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute -top-20 left-0 z-30 flex items-center justify-center h-full px-20 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <Image
          src="/chevron-left.svg"
          alt="Left arrow"
          width={75}
          height={75}
          className="max-sm:hidden"
        />
      </button>


      <button
        type="button"
        className="absolute -top-20 right-0 z-30 flex items-center justify-center h-full px-20 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <Image
          src="/chevron-right.svg"
          alt="Right arrow"
          width={75}
          height={75}
          className="max-sm:hidden"
        />
      </button>
    </div>
  );
};

export default Slideshow;

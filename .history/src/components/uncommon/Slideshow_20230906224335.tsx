import React, { useState } from "react";
import Image from "next/image";

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 2;

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
    "/Carousel/DCCarousel.png",
    "/Carousel/carouselboard.svg",
  ]; // Define your image paths here

  const imageTexts = [
    "The VIT Dance Club provides opportunities to dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.", // Add your text for the first image
    "Text for Image 2", // Add your text for the second image
  ];

  return (
    <div className="relative w-full" data-carousel="static">
      <div className="relative h-96 overflow-hidden rounded-lg">
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : undefined}
          >
            <Image
              src={path} // Use the image path from the array
              alt={`Image ${index + 1}`}
              width={1000} // Adjust the width and height as needed
              height={1000}
            />
            <p className="text-center mt-2">{imageTexts[index]}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <span className="text-4xl">&#9664;</span> {/* Left arrow icon */}
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <span className="text-4xl">&#9654;</span> {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default Slideshow;

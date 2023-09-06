import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
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
    "The VIT Dance Club provides opportunities to dance lovers to prove their talent and is a great platform for the students to have their artistic exploration in various styles. It boosts up the morales of the students and makes them reach a point of ecstasy. Dance unleashes us from everything and makes us feel a certain kind of happiness.",
    "Presenting, the Board of Dance Club 2023-24. Know more about the DC Board Members who are the prime backbone of this dance crew",
  ]; // Add your text for the images

  useEffect(() => {
    // Get the dimensions of the first image and set the container size accordingly
    const img = new Image();
    img.src = imagePaths[0];
    img.onload = () => {
      setContainerSize({ width: , height: img.height });
    };
  }, [imagePaths]);

  return (
    <div className="relative w-full" data-carousel="static">
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ width: containerSize.width, height: containerSize.height }}
      >
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : undefined}
          >
            <Image
              src={path}
              alt={`Image ${index + 1}`}
              width={containerSize.width}
              height={containerSize.height}
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

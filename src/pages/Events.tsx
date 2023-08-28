import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

type EventsProps = {};

const Events: React.FC<EventsProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  const numberOfImages = 3;
  const [activeIndex2, setActiveIndex2] = useState(0);
  const handlePrevClick2 = () => {
    setActiveIndex2((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : numberOfImages2 - 1
    );
  };

  const handleNextClick2 = () => {
    setActiveIndex2((prevIndex) =>
      prevIndex < numberOfImages2 - 1 ? prevIndex + 1 : 0
    );
  };
  const numberOfImages2 = 4;
  const [activeIndex3, setActiveIndex3] = useState(0);

  const handlePrevClick3 = () => {
    setActiveIndex3((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : numberOfImages3 - 1
    );
  };

  const handleNextClick3 = () => {
    setActiveIndex3((prevIndex) =>
      prevIndex < numberOfImages3 - 1 ? prevIndex + 1 : 0
    );
  };
  const numberOfImages3 = 7;

  const images = [
    "/events/workshop1.svg",
    "/events/workshop2.svg",
    "/events/workshop3.svg",
    "/events/workshop4.svg",
    "/events/workshop5.svg",
    "/events/workshop6.svg",
  ];

  return (
    <>
      <div className="text-center mb-12 py-8">
        <h1 className="text-3xl text-white font-semibold mb-4">Our Events</h1>
        <p className="text-gray-300 text-xl">
          Brace yourself for a high-octane dose of entertainment. Here are the
          events we performed lately.
        </p>
      </div>
      <div className="text-center ml-12 pl-12 mt-12">
        <h1 className="text-3xl  text-white font-semibold mb-2">Riviera</h1>
        <div className="flex ml-12 pl-12">
          <div className="w-1/3 p-4 pl-12 ml-12 slideshow-container">
            <Carousel
              showThumbs={false}
              selectedItem={activeIndex}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    onClick={handlePrevClick}
                    title={label}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                  >
                    prev
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    onClick={handleNextClick}
                    title={label}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                  >
                    next
                  </button>
                )
              }
            >
              <div>
                <Image
                  src="/events/riviera1.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/events/riviera2.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/events/riviera3.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
            </Carousel>
          </div>
          <div className="w-1/2 pt-12 mt-12 ">
            <p className="text-gray-300 text-xl">
              Riviera is VIT&apos;s mega cultural and sports carnival; and the
              Dance
              <p>
                Club has an opportunity every year to perform on this occasion.
              </p>
              With thousands in the crowd, you will see us shine and dazzle on
              <p>this amazing stage.</p>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="my-8 border-gray-500 w-1/2" />
      </div>
      <div className="text-center ml-12 pl-12 mt-12">
        <h1 className="text-3xl  text-white font-semibold mb-2">
          International Dance Day
        </h1>
        <div className="flex ml-12 pl-12">
          <div className="w-1/3 p-4 pl-12 ml-12 slideshow-container">
            <Carousel
              showThumbs={false}
              selectedItem={activeIndex2}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    onClick={handlePrevClick2}
                    title={label}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                  >
                    prev
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    onClick={handleNextClick2}
                    title={label}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                  >
                    next
                  </button>
                )
              }
            >
              <div>
                <Image
                  src="/events/IDD1.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/events/IDD2.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/events/IDD3.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/events/IDD4.svg"
                  alt="VIT DANCE CLUB"
                  width={500}
                  height={500}
                />
              </div>
            </Carousel>
          </div>
          <div className="w-1/2 pt-12 mt-12 ">
            <p className="text-gray-300 text-xl">
              IDD is a celebration of all dancers and the art itself and takes{" "}
              <br />
              place every year. All the teams of the club come together and{" "}
              <br /> put up a thrilling show for our audience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="my-8 border-gray-500 w-1/2" />
      </div>
      <div className="text-center ml-12 pl-12 mt-12">
        <h1 className="text-3xl  text-white font-semibold mb-2">
          World Dance Day
        </h1>
        <div className="flex ml-12 pl-12">
          <div className="w-1/3 p-4 pl-12 ml-12 slideshow-container">
            <Carousel
              showThumbs={false}
              selectedItem={activeIndex3}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    onClick={handlePrevClick3}
                    title={label}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                  >
                    prev
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    onClick={handleNextClick3}
                    title={label}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                  >
                    next
                  </button>
                )
              }
            >
              <div>
                <Image
                  src="/events/WDD1.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
              <div>
                <Image
                  src="/events/WDD2.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
              <div>
                <Image
                  src="/events/WDD3.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
              <div>
                <Image
                  src="/events/WDD4.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
              <div>
                <Image
                  src="/events/WDD5.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
              <div>
                <Image
                  src="/events/WDD6.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
              <div>
                <Image
                  src="/events/WDD7.svg"
                  alt="VIT DANCE CLUB"
                  height={5000}
                  width={5000}
                />
              </div>
            </Carousel>
          </div>
          <div className="w-1/2 pt-12 mt-12 ">
            <p className="text-gray-300 text-xl">
              World Dance Day is the Dance Club&apos;s annual and flagship
              performance, <br /> which we take a lot of pride in. The event
              consists of all 7 teams <br /> showcasing their best performances
              and entertaining the <br />
              audience for the evening.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mb-12 py-8">
        <h1 className="text-3xl text-white font-semibold mt-8 mb-4 py-12">
          Other Events and Workshops
        </h1>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-3 w-3/4 gap-4 mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Image ${index}`}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Events;

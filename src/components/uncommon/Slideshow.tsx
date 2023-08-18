import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
type SlideshowProps = {};

const Slideshow: React.FC<SlideshowProps> = () => {
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
  return (
    <div className="">
      <div className="w-1/2 mx-auto relative  pt-20">
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
                <Image
                  src="/chevron-left.png"
                  height={300}
                  width={200}
                  alt="prev"
                />
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
                <Image
                  src="/chevron-right.png"
                  height={300}
                  width={200}
                  alt="next"
                />
              </button>
            )
          }
        >
          <div>
            <img src="/Carousel/DCCarousel.png" alt="VIT DANCE CLUB" />
          </div>
          <div>
            <img src="/Carousel/DCCarousel2.png" alt="VIT DANCE CLUB" />
          </div>
          <div>
            <img src="/Carousel/DCCarousel3.png" alt="VIT DANCE CLUB" />
          </div>
        </Carousel>
        <div className="w-full mx-auto text-white text-center mt-8">
          <h1 className="text-4xl whitespace-nowrap">
            Welcome to <span className="font-extrabold">VIT DANCE CLUB</span>
          </h1>
          <div className="text-gray-400 text-lg">
            <p className="mt-3">
              The VIT Dance Club provides opportunities to dance lovers to prove
              their talent and is a great platform for the
            </p>
            <p>
              {" "}
              students to have their artistic exploration in various styles. It
              boosts up the morales of the students and makes them reach a point
              of ecstasy. Dance unleashes us from everything and makes us feel a
              certain kind of happiness.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto relative  pt-20 px-20">
        <h1 className="text-white text-4xl">
          VIT Dance Club promote the dance art form both{" "}
          <p>
            <span style={{ color: "#3947E2" }}>regional</span> and{" "}
            <span style={{ color: "#3947E2" }}>western</span> and give
            opportunity for
          </p>{" "}
          students to perform
        </h1>
        <h5 className="text-gray-400 text-sm pt-4">
          Winners of various dance competitions across the country & club
          consists of seven major teams of varied dance forms across India.
        </h5>
      </div>
      <div className="py-10">
        <div className="flex justify-center items-center mt-8 space-x-6">
          <Image
            src="/icons/flaglogo.png"
            alt="Logo 1"
            width={40}
            height={40}
            style={{ marginRight: "1rem" }}
          />
          <div className="flex flex-col text-white gap-1">
            <div className="flex pt-8 text-3xl font-extrabold"> 7</div>
            <div className="flex font-extralight text-sm">MAJOR TEAMS</div>
          </div>
          <Image
            src="/icons/humanlogo.png"
            alt="Logo 3"
            width={40}
            height={40}
          />
          <div className="flex flex-col text-white gap-1">
            <div className="flex pt-8 text-3xl font-extrabold"> 150+</div>
            <div className="flex font-extralight text-base">CREW MEMBERS</div>
          </div>
          <Image src="/icons/taglogo.png" alt="Logo 4" width={50} height={50} />
          <div className="flex flex-col text-white gap-1">
            <div className="flex pt-8 text-3xl font-extrabold"> 200+</div>
            <div className="flex font-extralight text-base">PERFORMANCES</div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 py-6">
        <h2 className="text-sm text-gray-400">MAJOR PRIZE WINNING STAGES</h2>
        <div className="flex justify-center items-center mt-4">
          <Image
            src="/icons/festlogo.png"
            alt="fests won"
            width={800}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
export default Slideshow;

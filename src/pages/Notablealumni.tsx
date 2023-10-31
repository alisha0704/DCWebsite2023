import React, { useState } from 'react';
import Image from 'next/image';

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 5;

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
    "/landingassests/carouselassets/image1.svg",
    "/landingassests/carouselassets/image2.svg",
    "/landingassests/carouselassets/image3.svg",
    "/landingassests/carouselassets/image4.svg",
    "/landingassests/carouselassets/image5.svg",
  ];

  return (
    <>
      <div className="text-[#FFF6E8] font-medium lg:text-4xl text-3xl text-center tracking-widest px-[2vw]">
        A Thrilling Multiplayer Shooting Experience
      </div>
      <div className="text-[#FFF6E8] font-normal lg:text-lg text-xl text-center px-[3vw]">
        Laser Tag offers you a chance to step onto the arena for a thrilling
        multi-player experience. <br />
        Don your vests and have your guns at the ready, maximize hits to climb
        up the leaderboard!
      </div>
      <div className="lg:w-[80vw] mt-[2vh]" id="gallery">
        <div className=" mx-auto relative px-[2vw]" data-carousel="static">
          <div className="relative overflow-hidden rounded-lg">
            {imagePaths.map((path, index) => {
              return (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === activeIndex ? "block" : "hidden"
                  } flex`}
                  data-carousel-item={index === activeIndex ? "active" : undefined}
                >
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index) % 5]}
                      alt={`Image ${index}`}
                      width={200}
                      height={200}
                      className="border-2 border-red-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 1) % 5]}
                      alt={`Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="border-2 border-red-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 2) % 5]}
                      alt={`Image ${index + 2}`}
                      width={600}
                      height={600}
                      className="border-2 border-red-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 3) % 5]}
                      alt={`Image ${index + 3}`}
                      width={400}
                      height={400}
                      className="border-2 border-red-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={imagePaths[(index + 4) % 5]}
                      alt={`Image ${index + 4}`}
                      width={200}
                      height={200}
                      className="border-2 border-red-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrevClick}
          >
            <Image
              src="/landingassests/carouselassets/goleft.svg"
              alt="Left arrow"
              width={40}
              height={40}
            />
          </button>

          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNextClick}
          >
            <Image
              src="/landingassests/carouselassets/goright.svg"
              alt="Right arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </>
  );
};

const Notablealumni: React.FC = () => {
  return (
    <>
      <div className="text-[#FFF6E8] font-medium lg:text-4xl text-3xl text-center tracking-widest px-[2vw]">
        A Thrilling Multiplayer Shooting Experience
      </div>
      <div className="text-[#FFF6E8] font-normal lg:text-lg text-xl text-center px-[3vw]">
        Laser Tag offers you a chance to step onto the arena for a thrilling
        multi-player experience. <br />
        Don your vests and have your guns at the ready, maximize hits to climb
        up the leaderboard!
      </div>
    </>
  );
};

export default Notablealumni;

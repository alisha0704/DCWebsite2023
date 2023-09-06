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
    // <div className="">
    //   <div className="">
    //     <Carousel
    //       showThumbs={false}
    //       selectedItem={activeIndex}
    //       renderArrowPrev={(onClickHandler, hasPrev, label) =>
    //         hasPrev && (
    //           <button
    //             onClick={handlePrevClick}
    //             title={label}
    //             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
    //           >
    //             <Image
    //               src="/chevron-left.png"
    //               height={300}
    //               width={200}
    //               alt="prev"
    //             />
    //           </button>
    //         )
    //       }
    //       renderArrowNext={(onClickHandler, hasNext, label) =>
    //         hasNext && (
    //           <button
    //             onClick={handleNextClick}
    //             title={label}
    //             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
    //           >
    //             <Image
    //               src="/chevron-right.png"
    //               height={300}
    //               width={200}
    //               alt="next"
    //             />
    //           </button>
    //         )
    //       }
    //     >
    //       <div>
    //         <Image
    //           src="/Carousel/DCCarousel.png"
    //           alt="VIT DANCE CLUB"
    //           width={20000}
    //           height={20000}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src="/Carousel/carouselboard.svg"
    //           alt="VIT DANCE CLUB"
    //           width={500}
    //           height={500}
    //         />
    //       </div>
    //     </Carousel>
    //     <div className="w-full mx-auto text-white text-center mt-8">
    //       <h1 className="text-2xl md:text-3xl lg:4xl md:whitespace-nowrap">
    //         Welcome to <span className="font-extrabold">VIT DANCE CLUB</span>
    //       </h1>
    //       <div className="text-gray-400 text-sm md:text-md lg:text-lg">
    //         <p className="mt-3">
    //           The VIT Dance Club provides opportunities to dance lovers to prove
    //           their talent and is a great platform for the
    //         </p>
    //         <p>
    //           {" "}
    //           students to have their artistic exploration in various styles. It
    //           boosts up the morales of the students and makes them reach a point
    //           of ecstasy. Dance unleashes us from everything and makes us feel a
    //           certain kind of happiness.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Slideshow;

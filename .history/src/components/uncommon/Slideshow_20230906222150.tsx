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
    

<div id="controls-carousel" className="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <!-- Item 2 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." >
        </div>
        <!-- Item 3 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

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

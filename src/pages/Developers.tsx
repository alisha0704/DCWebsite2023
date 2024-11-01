import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });

const Developers = () => {
  const images = [
    {
      imageUrl: "/Developers/Group 632 (1).png",
    },
    {
      imageUrl: "/Developers/Group 633.svg",
    },
    {
      imageUrl: "/Developers/Group 635.svg",
    },
    {
      imageUrl: "/Developers/Group 634.svg",
    },
    {
      imageUrl: "/Developers/Group 636.png",
    },
  ];

  return (
    <>
      <div className="backdrop-blur-2xl backdrop-brightness-100">
        <Link href="/" className="absolute hidden lg:block pt-14 text-white">
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
        <div className="flex justify-center items-center">
          <div className="text-center p-8 max-w-screen-lg w-full overflow-y-auto">
            <div className="mb-1">
              <div className="text-xl font-bold uppercase tracking-wider md:text-4xl mt-8 text-white">
                <div className={monte.className}> Developers Team </div>
              </div>
            </div>
            <p className="text-md max-sm:text-md mb-8 md:mb-14 py-3 text-gray-300">
              Meet the creative UI/UX Team and the talented Developers of this
              website.
            </p>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 md:w-5/6">
                {images.slice(0, 3).map((image, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={image.imageUrl}
                      alt={`Image ${index + 1}`}
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  </div>
                ))}
                <div className="col-span-3 flex justify-center gap-12">
                  {images.slice(3).map((image, index) => (
                    <div key={index} className="text-center">
                      <Image
                        src={image.imageUrl}
                        alt={`Image ${index + 4}`}
                        width={250}
                        height={250}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;

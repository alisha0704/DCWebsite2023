import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });
type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const images = [
    {
      imageUrl: "/board/RIC 1.png",
      memberName: "RITHISH KUMAR",
      memberDesgn: "THE CHAIRPERSON OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Somya.png",
      memberName: "SOMYA MISHRA",
      memberDesgn: "THE VICE-CHAIRPERSON OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Anshuman.png",
      memberName: "ANSHUMAN GILL ",
      memberDesgn: "THE GENERAL SECRETARY OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Agastya.png",
      memberName: "AGASTYA KARNWAL",
      memberDesgn: "THE CO-SECRETARY OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Sakshi.png",
      memberName: "SAKSHI LELE",
      memberDesgn: "THE EVENTS HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Aarohi 1.png",
      memberName: "AAROHI GUPTA",
      memberDesgn: "THE PUBLICITY HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Sembi.png",
      memberName: "SIVASEMBIAN M",
      memberDesgn: "THE DESIGN HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Divyanshi.png",
      memberName: "DIVYANSHI GROVER",
      memberDesgn: "THE EDITORIAL HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Shreya.png",
      memberName: "SHREYA MANGESH",
      memberDesgn: "THE FINANCE HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/Aravind.png",
      memberName: "ARAVIND KRISHNA",
      memberDesgn: "THE OUTREACH HEAD OF VIT DANCE CLUB",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
    return () => {
      sessionStorage.removeItem("scrollPosition");
    };
  }, []);

  const firstFourImages = images.slice(0, 4);
  const remainingImages = images.slice(4);

  return (
    <>
      <div className="container backdrop-blur-xl backdrop-brightness-100">
        <Link
          href="/"
          className="absolute hidden lg:block  px-6 pt-14 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="flex justify-center items-center ">
          <div className="text-center p-8 max-w-screen-lg w-full overflow-y-auto">
            <div className="mb-4">
              <div className="text-4xl font-bold  mb-1 mt-8 text-white tracking-wide">
                <div className={monte.className}>THE BOARD</div>
              </div>
            </div>
            <p className="text-md md:text-lg mb-8 text-gray-300">
              Alone you can do so little, together you can do so much.
              Presenting the Board of Dance Club 2023-24.
            </p>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 py-8 lg:w-3/4">
                {firstFourImages.map((image, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={image.imageUrl}
                      alt={`Image ${index + 1}`}
                      width={1000}
                      height={1000}
                    />
                    <div className="flex flex-col items-center mt-2">
                      <h2 className="text-md lg:text-lg font-semibold text-white mt-2">
                        {image.memberName}
                      </h2>
                      <h3 className="text-xs lg:text-sm text-gray-400 mt-1 mb-8">
                        {image.memberDesgn}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-8 w-full">
              {remainingImages.map((image, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={image.imageUrl}
                    alt={`Image ${index + 5}`}
                    width={1000}
                    height={1000}
                  />
                  <div className="flex flex-col items-center mt-2">
                    <h2 className="text-md lg:text-lg font-semibold text-white mt-2">
                      {image.memberName}
                    </h2>
                    <h3 className="text-xs lg:text-sm text-gray-400 mt-1 mb-8">
                      {image.memberDesgn}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <div className="flex justify-center items-center backdrop-blur-2xl">
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
            <span className="text-2xl font-semibold">Board of 2023-24</span>
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className=" grid grid-cols-1 lg:grid-cols-2   mt-10 px-6 gap-16">
              <Image
                src="/board/dcboard23.jpeg"
                alt="Board"
                width={2114}
                height={450}
              />
              <Image
                src="/board/dcboard223.jpeg"
                alt="Board"
                width={2114}
                height={450}
              />
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <div className="flex justify-center items-center backdrop-blur-2xl">
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
            <span className="text-2xl font-semibold">Board of 2022-23</span>
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className=" grid grid-cols-1 lg:grid-cols-2   mt-10 px-6 gap-16">
              <Image
                src="/board/board221.svg"
                alt="Board"
                width={450}
                height={450}
              />
              <Image
                src="/board/board222.svg"
                alt="Board"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex justify-center items-center">
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
            <span className="text-2xl font-semibold">Board of 2021-22</span>
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block px-2"
            />
          </div>
          <div className="flex justify-center px-6 mt-10 gap-16">
            <Image
              src="/board/board21.svg"
              alt="Board"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="py-10">
          <div className="flex justify-center items-center">
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block px-2"
            />
            <span className="text-2xl font-semibold">Board of 2020-21</span>
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block px-2"
            />
          </div>
          <div className="flex justify-center px-6 mt-10 gap-16">
            <Image
              src="/board/board20.svg"
              alt="Board"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="py-10">
          <div className="flex justify-center items-center">
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
            <span className="text-2xl font-semibold">Board of 2019-20</span>
            <Image
              src="/line.svg"
              alt="Board"
              width={300}
              height={300}
              className="hidden lg:block"
            />
          </div>
          <div className="flex justify-center px-6 mt-10 gap-16">
            <Image
              src="/board/board19.svg"
              alt="Board"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

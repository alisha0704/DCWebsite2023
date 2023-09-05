import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import FullpageLoader from "@/components/common/FullpageLoader";

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const images = [
    {
      imageUrl: "/board/aman.svg",
      memberName: "Aman Bohara",
      memberDesgn: "THE CHAIRPERSON OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/gowri.svg",
      memberName: "Gowri Namboodiri",
      memberDesgn: "THE VICE-CHAIRPERSON OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/manasa.png",
      memberName: "Manasa Madhusoodanan",
      memberDesgn: "THE GENERAL SECRETARY OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/sree.svg",
      memberName: "Sree Nandhan",
      memberDesgn: "THE CO-SECRETARY OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/teerth.svg",
      memberName: "Teerth Amin",
      memberDesgn: "THE EVENTS HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/aditi.svg",
      memberName: "Aditi Sudhir",
      memberDesgn: "THE PUBLICITY HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/nandin.svg",
      memberName: "Nandin Sajith",
      memberDesgn: "THE DESIGN HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/raaga.svg",
      memberName: "Raaga Laasya",
      memberDesgn: "THE EDITORIAL HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/srishti.svg",
      memberName: "Srishti Sinha",
      memberDesgn: "THE FINANCE HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/board/siraj.svg",
      memberName: "Sirajudeen",
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

  return (
    <div>
      <div className="flex justify-center items-center h-3/4  bg-black">
        <div className="text-center p-8 max-w-screen-lg w-full overflow-y-auto">
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl mb-1 mt-8 text-white">
              The Board
            </h1>
          </div>
          <Link
            href="/"
            className="absolute hidden lg:block top-16 left-14 text-white mt-20 ml-8 pl-16 pt-8"
          >
            <FiArrowLeft className="text-5xl" /> {FiArrowLeft}
          </Link>
          <p className="text-sm md:text-md mb-8 text-gray-300">
            Alone you can do so little, together you can do so much. Presenting
            the Board of Dance Club 2023-24.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-14 py-8 w-full">
            {images.map((image, index) => (
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
      </div>
    </div>
  );
};

export default Board;

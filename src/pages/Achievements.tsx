import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

const Achievements = () => {
  const images = [
    {
      imageUrl: "/achievements/achievement1.svg",
      memberName: "SYNAPSE - 2023",
      memberDesgn: "DUET DANCE- 1ST PLACE & 2ND PLACE CHOREONITE- 1ST PLACE",
    },
    {
      imageUrl: "/achievements/achievement2.svg",
      memberName: "VIBRANCE - 2023",
      memberDesgn: "THEMATIC CATEGORY- WINNERS MAYA",
    },
    {
      imageUrl: "/achievements/achievement3.svg",
      memberName: "MOOD INDIGO - 2022",
      memberDesgn: "THEMATIC CATEGORY- 1ST RUNNER UP MIRAGE",
    },
    {
      imageUrl: "/achievements/achievement4.svg",
      memberName: "SYNAPSE - 2023",
      memberDesgn: "DUET DANCE- 1ST PLACE & 2ND PLACE CHOREONITE- 1ST PLACE",
    },
    {
      imageUrl: "/achievements/achievement5.svg",
      memberName: "VIBRANCE - 2023",
      memberDesgn: "THEMATIC CATEGORY- WINNERS MAYA",
    },
    {
      imageUrl: "/achievements/achievement6.svg",
      memberName: "MOOD INDIGO - 2022",
      memberDesgn: "THEMATIC CATEGORY- 1ST RUNNER UP UNITRIX",
    },
  ];
  return (
    <div className="flex justify-center items-center h-3/4  bg-black">
      <div className="text-center p-8 max-w-screen-lg w-full overflow-y-auto">
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-1 mt-8 text-white">Our Achievements</h1>
        </div>
        <Link
          href="/"
          className="absolute hidden lg:block top-16 left-14 text-white mt-20 ml-8 pl-16 pt-8"
        >
          <FiArrowLeft className="text-5xl" /> {FiArrowLeft}
        </Link>
        <p className="text-sm md:text-md lg:text-xl mb-8 text-gray-300">
          We never leave the stage empty handed, either we win the audience{'\''}s heart
          or we win the whole event!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-8 w-full">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <Image src={image.imageUrl} 
              alt={`Image ${index + 1}`}
               width={1000}
               height={1000} />
              <div className="flex flex-col items-center mt-2">
                <h2 className="text-sm md:text-md lg:text-xl font-semibold text-white mt-2">
                  {image.memberName}
                </h2>
                <h3 className="text-xs text-gray-400 mt-1 mb-8">
                  {image.memberDesgn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

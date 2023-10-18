import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";

type AchievementsProps = {};

const Achievements: React.FC<AchievementsProps> = () => {
  const images = [
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/image 33 (2).svg",
      eventName: "SYNAPSE - 2023",
      eventDesc: "DUET DANCE- 1ST & 2ND PLACE",
      winningTeam: "JNJ BHANGRA & CHARGERS",
    },
    {
      imageUrl: "/achievements/image 33.png",
      eventName: "SYNAPSE - 2023",
      eventDesc: "CHOREONITE- 1ST PLACE",
      winningTeam: "UNITRIX ",
    },
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/image 95.svg",
      eventName: "REVIVALS - 2023",
      eventDesc: "TRADITIONALS DANCE -2ND PLACE",
      winningTeam: "MIRAGE",
    },
    {
      imageUrl: "/achievements/image 34.svg",
      eventName: "VIBRANCE - 2023",
      eventDesc: "THEMATIC CATEGORY - WINNERS",
      winningTeam: "MAYA",
    },
    {
      imageUrl: "/achievements/image 81.svg",
      eventName: "MOOD INDIGO - 2022",
      eventDesc: "INDIGO SAGA - 1ST RUNNER UP",
      winningTeam: "MIRAGE",
    },
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/0.svg",
    },
    {
      imageUrl: "/achievements/image 80.svg",
      eventName: "MOOD INDIGO - 2022",
      eventDesc: "SANSKRITI - 1ST RUNNER UP",
      winningTeam: "JNJ BHAANGRA",
    },
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/image 77.svg",
      eventName: "PEGASUS - 2022",
      eventDesc: "EASTERN CATEGORY - 1ST PLACE",
      winningTeam: "MIRAGE",
    },
    {
      imageUrl: "/achievements/image 78.svg",
      eventName: "PEGASUS - 2022",
      eventDesc: "EASTERN CATEGORY - 2ND PLACE",
      winningTeam: "JNJ BHANGRA",
    },
    {
      imageUrl: "/achievements/image 79.svg",
      eventName: "PEGASUS - 2022",
      eventDesc: "WESTERN CATEGORY - 1ST PLACE",
      winningTeam: "UNITRIX",
    },
    {
      imageUrl: "/achievements/image 76.svg",
      eventName: "RAGAM, NIT CALICUT - 2020",
      eventDesc: "3RD PLACE",
      winningTeam: "AMRITHA K",
    },
    {
      imageUrl: "/achievements/image 94.svg",
      eventName: "PIMS CULTURALS - 2020",
      eventDesc: "LOOP DANCE ONLINE COMPETITION - 1ST PLACE",
      winningTeam: "BBC",
    },
    {
      imageUrl: "/achievements/image 41.svg",
      eventName: "GROVE IT UP - 2020",
      eventDesc: "THE SHOW STOPPERS DANCE - 2ND PLACE",
      winningTeam: "AMRITHA K",
    },
    {
      imageUrl: "/achievements/20 (2).svg",
    },
    {
      imageUrl: "/achievements/20 (2).svg",
    },
    {
      imageUrl: "/achievements/image 75.svg",
      eventName: "ALIVIO - 2020",
      eventDesc: "QUADRILLE - 1ST POSITION",
      winningTeam: "BBC",
    },
    {
      imageUrl: "/achievements/image 73.svg",
      eventName: "MOOD INDIGO",
      eventDesc: "1ST RUNNER UP",
      winningTeam: "JNJ BHANGRA",
    },
    {
      imageUrl: "/achievements/image 74.svg",
      eventName: "WAVES - 2020",
      eventDesc: "SHUFFLE IT UP - 1ST PLACE",
      winningTeam: "MEHER NIGAM",
    },
    {
      imageUrl: "/achievements/image 65.svg",
      eventName: "IIM BANGALORE - 2020",
      eventDesc: "UNMAAD - 1ST PLACE",
      winningTeam: "MIRAGE",
    },
    {
      imageUrl: "/achievements/image 84.svg",
      eventName: "SPANDAN - 2019",
      eventDesc: "NON THEME EASTERN - 3RD PLACE",
      winningTeam: "JNJ BHANGRA",
    },
    {
      imageUrl: "/achievements/image 85.svg",
      eventName: "SPANDAN - 2019",
      eventDesc: "NON THEME WESTERN - 1ST PLACE",
      winningTeam: "UNITRIX",
    },
    {
      imageUrl: "/achievements/image 88.svg",
      eventName: "SPANDAN - 2019",
      eventDesc: "DUET - 3RD PLACE",
      winningTeam: "DEEPESH AND GAGAN",
    },
    {
      imageUrl: "/achievements/image 82.svg",
      eventName: "Sree Nandhan",
      eventDesc: "THE CO-SECRETARY OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/2.svg",
      eventName: "",
      eventDesc: "",
    },
    {
      imageUrl: "/achievements/image 86.svg",
      eventName: "Aditi Sudhir",
      eventDesc: "THE PUBLICITY HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 83.svg",
      eventName: "Nandin Sajith",
      eventDesc: "THE DESIGN HEAD OF VIT DANCE CLUB",
    },
    {
      imageUrl: "/achievements/0.svg",
      eventName: "",
      eventDesc: "",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 93.svg",
      eventName: "Srishti Sinha",
      eventDesc: "THE FINANCE HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 87.svg",
      eventName: "Aman Bohara",
      eventDesc: "THE CHAIRPERSON OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/2.svg",
      eventName: "",
      eventDesc: "",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 89.svg",
      eventName: "Manasa Madhusoodanan",
      eventDesc: "THE GENERAL SECRETARY OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 91.svg",
      eventName: "Sree Nandhan",
      eventDesc: "THE CO-SECRETARY OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/9.svg",
      eventName: "",
      eventDesc: "",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 90.svg",
      eventName: "Aditi Sudhir",
      eventDesc: "THE PUBLICITY HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 71.svg",
      eventName: "Nandin Sajith",
      eventDesc: "THE DESIGN HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 93.svg",
      eventName: "Raaga Laasya",
      eventDesc: "THE EDITORIAL HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 58.svg",
      eventName: "Srishti Sinha",
      eventDesc: "THE FINANCE HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 68.svg",
      eventName: "Aman Bohara",
      eventDesc: "THE CHAIRPERSON OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/0.svg",
    },
    {
      imageUrl: "/achievements/image 53.svg",
      eventName: "Sree Nandhan",
      eventDesc: "THE CO-SECRETARY OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/2.svg",
    },
    {
      imageUrl: "/achievements/8.svg",
    },
    {
      imageUrl: "/achievements/image 72.svg",
      eventName: "Nandin Sajith",
      eventDesc: "THE DESIGN HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 57.svg",
      eventName: "Raaga Laasya",
      eventDesc: "THE EDITORIAL HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 70.svg",
      eventName: "Srishti Sinha",
      eventDesc: "THE FINANCE HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 47.svg",
      eventName: "Aman Bohara",
      eventDesc: "THE CHAIRPERSON OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 69.svg",
      eventName: "Gowri Namboodiri",
      eventDesc: "THE VICE-CHAIRPERSON OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 46.svg",
      eventName: "Manasa Madhusoodanan",
      eventDesc: "THE GENERAL SECRETARY OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/20 (2).svg",
    },
    {
      imageUrl: "/achievements/17.svg",
    },
    {
      imageUrl: "/achievements/image 56.svg",
      eventName: "Aditi Sudhir",
      eventDesc: "THE PUBLICITY HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 67.svg",
      eventName: "Nandin Sajith",
      eventDesc: "THE DESIGN HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 66.svg",
      eventName: "Raaga Laasya",
      eventDesc: "THE EDITORIAL HEAD OF VIT DANCE CLUB",
      winningTeam: "Mirage",
    },
    {
      imageUrl: "/achievements/image 55.svg",
      eventName: "IIM Bangalore- 2017",
      eventDesc: "Footloose- 2nd place",
      winningTeam: "Mirage",
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
    <>
      <div className="container">
        <Link href="/" className="absolute hidden lg:block pt-14 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="flex justify-center items-center   bg-black">
          <div className="text-center p-8 max-w-screen-lg w-full overflow-y-auto">
            <div className="mb-4">
              <div className="text-2xl md:text-3xl mb-1 mt-8 text-white">
                Our Achievements
              </div>
            </div>

            <p className="text-sm md:text-md mb-8 text-gray-300">
              We never left the stage empty handed, either we win the audience
              heart of we win the whole event
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
                      {image.eventName}
                    </h2>
                    <h3 className="text-xs lg:text-sm text-gray-400 mt-1">
                      {image.
              eventDesc}
                    </h3>
                    <h3 className="text-xs lg:text-sm text-gray-400 mb-8">
                      {image.winningTeam}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;

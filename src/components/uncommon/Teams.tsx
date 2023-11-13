import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TeamsProps = {};

const imageLinks = [
  "/Riwaayat",
  "/Mirage",
  "/Unitrix",
  "/BBC",
  "/Maya",
  "/Jnj",
  "/chargers",
];

const teamsData = [
  {
    name: "RIWAAYAT",
    danceStyle: "KATHAK",
    imageSrc: "/Teams/Riwaayat.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
  {
    name: "MIRAGE",
    danceStyle: "INDO JAZZ & CONTEMPORARY",
    imageSrc: "/Teams/Mirage.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
  {
    name: "UNITRIX",
    danceStyle: "HIP HOP",
    imageSrc: "/Teams/Unitrix.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
  {
    name: "BOLLYWOOD BADMAASH COMPANY",
    danceStyle: "BOLLYWOOD",
    imageSrc: "/Teams/BBC.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
  {
    name: "MAYA",
    danceStyle: "INDIAN CLASSICAL",
    imageSrc: "/Teams/Maya.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
  {
    name: "JNJ BHANGRA",
    danceStyle: "BHANGRA",
    imageSrc: "/Teams/JNJ.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
];

const chargersteam = {
  name: "CHARGERS",
  imageSrc: "/Teams/Chargers.png",
  danceStyle: "SOUTH INDIAN KUTHU AND WESTERN",
};

const Teams: React.FC<TeamsProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center md:px-12 px-2 backdrop-blur-2xl  backdrop-brightness-200">
      <div className="">
        <h1 className="text-2xl md:text-3xl text-center font-semibold lg:text-4xl pt-6 text-white mb-2">
          Our Teams
        </h1>
        <p className="text-center text-xs md:text-md lg:text-xl text-gray-400 mb-8">
          Club consists of seven teams with each junior team of varied dance
          forms across India.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-20 py-6">
            {teamsData.map((team, index) => (
              <div
                key={index}
                className={`text-center team-container relative ${
                  index === teamsData.length - 1 ? "last-team" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={
                  index === teamsData.length - 1 ? { margin: "0 auto" } : {}
                }
              >
                <a href={imageLinks[index]}>
                  <Image
                    src={team.imageSrc}
                    alt={`Image ${index + 1}`}
                    width={400}
                    height={700}
                    className="hover:scale-105"
                  />
                </a>
                <div className="flex flex-col rounded-xl opacity-80 backdrop-blur-2xl items-center mt-2">
                  <h2 className="text-lg px-4 text-center max-sm:px-6 pr-8 font-semibold leading-0 text-white mt-2">
                    {team.name}
                  </h2>
                  <div
                    className="text-sm md:text-md lg:text-lg text-center text-gray-100 mt-1 mb-8 "
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {hoveredIndex === index ? (
                      <button className="text-md text-gray-400 tracking-wide ">
                        <div className="flex gap-4 ">
                          Learn More
                          <Image
                            src="/icons/sidearrow.svg"
                            alt=""
                            width={8}
                            height={8}
                          />
                        </div>
                      </button>
                    ) : (
                      <h4 className="text-sm">{team.danceStyle}</h4>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <div className="text-center team-container relative">
          <Link href="/chargers">
            <Image
              src={chargersteam.imageSrc}
              alt={`Image`}
              width={400}
              height={700}
              className={`rounded-md ${hovered ? "hover:scale-105" : ""}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </Link>
          <div className="flex flex-col rounded-xl opacity-80 backdrop-blur-2xl items-center mt-2">
            <h2 className="text-lg px-4 text-center max-sm:px-6 pr-8 font-semibold leading-0 text-white ">
              {chargersteam.name}
            </h2>
            <div className="text-sm md:text-md lg:text-lg text-center text-gray-100 mt-1 mb-8">
              {hovered ? (
                <button className="text-md text-gray-400 tracking-wide">
                  <div className="flex gap-4 ">
                    Learn More
                    <Image
                      src="/icons/sidearrow.svg"
                      alt=""
                      width={8}
                      height={8}
                    />
                  </div>
                </button>
              ) : (
                <h4 className="text-sm">{chargersteam.danceStyle}</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

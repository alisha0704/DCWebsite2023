import React, { useState } from "react";
import Image from "next/image";

type TeamsProps = {};
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
  {
    name: "CHARGERS",
    danceStyle: "SOUTH INDIAN KUTHU AND WESTERN",
    imageSrc: "/Teams/Chargers.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.",
  },
];

const Teams: React.FC<TeamsProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center p-8 ">
      <h1 className="text-4xl text-white mb-2">Our Teams</h1>
      <p className="text-center text-gray-400 mb-8">
        Club consists of seven teams with each junior team of varied dance forms
        across India.
      </p>
      <div className="grid grid-cols-3 gap-10 px-10 py-8">
        {teamsData.map((team, index) => (
          <div
            key={index}
            className="rounded bg-gray-100 overflow-hidden relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={team.imageSrc}
              alt={team.danceStyle}
              height={350}
              width={350}
            />
            {hoveredIndex === index && (
              <div
                className="absolute inset-0 bg-black bg-opacity-75 text-white rounded p-4"
                style={{ display: "block" }}
              >
                <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
                <p className="text-sm text-gray-300">{team.danceStyle}</p>
                <p className="text-sm mt-4">{team.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center py-8 px-10 ml-20">
        <div className="flex-1 ml-20">
          <h1 className="text-4xl  mb-2 text-white ml-20">
            Want to be a part of this{" "}
            <span style={{ color: "#3947E2" }}>family?</span>
            <p>
              <span style={{ color: "#3947E2" }}>VIT Dance Club</span> auditions
              will be
            </p>{" "}
            happening from
            <span style={{ color: "#3947E2" }}> January to March</span> every
            year. Stay tuned to our Instagram handle for more updates.
          </h1>
        </div>
        <div className="flex-1 ml-10">
          <div className="relative">
            <img
              src="/round1.png"
              alt="Round 1"
              className="w-45 h-45 object-cover rounded-t"
            />
            <img
              src="/auditions.png"
              alt="Auditions"
              className="w-45 h-45 object-cover rounded-t absolute inset-0"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;

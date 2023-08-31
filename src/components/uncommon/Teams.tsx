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
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white mb-2">Our Teams</h1>
      <p className="text-center text:sm md:text-lg lg:text-xl text-gray-400 mb-8">
        Club consists of seven teams with each junior team of varied dance forms
        across India.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 w-3/4 ">
          {teamsData.map((image, index) => (
            <div key={index} className="text-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image src={image.imageSrc} 
              alt={`Image ${index + 1}`}
               width={400}
               height={700} />
              <div className="flex flex-col opacity-75 items-center mt-2">
                <h2 className="text-xs md:text-md lg:text-lg px-4 text-center max-sm:px-6 pr-8 font-semibold text-white mt-2">
                  {image.name}
                </h2>
                <h3 className="text-xs md:text-sm lg:text-md text-center max-sm:px-8 max-sm:mr-4 pr-8 text-gray-400 mt-1 mb-8">
                  {image.danceStyle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      <div className="flex flex-row items-center py-8 md:px-10 ml-20">
        <div className="flex-1 ml-20">
          <h1 className="text-xl md:text-3xl lg:text-4xl mb-2 text-white ml-20">
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
            <Image
              src="/auditionscombined.svg"
              alt="Auditions"
              height={400}
              width={400}
              className="w-45 h-45 object-cover rounded-t"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;

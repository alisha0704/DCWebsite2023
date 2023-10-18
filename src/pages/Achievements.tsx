import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { type } from 'os'

type AchievementsProps = {}

const Achievements: React.FC<AchievementsProps> = () => {
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
      imageUrl: "/achievements/image 55.svg",
      memberName: "IIM Bangalore- 2017",
      memberDesgn: "Footloose- 2nd place",
      memberTeam: "Mirage",
    },
    
  ]
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
      <Link
              href="/"
              className="absolute hidden lg:block pt-14 text-white"
            >
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
              We never left the stage empty handed, either we win the audience heart of we win the whole event 
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
                    <h3 className="text-xs lg:text-sm text-gray-400 mt-1">
                      {image.memberDesgn}
                    </h3>
                    <h3 className="text-xs lg:text-sm text-gray-400 mb-8">
                      {image.memberTeam}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Achievements

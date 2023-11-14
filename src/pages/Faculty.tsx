import React from "react";
import Link from "next/link";
import Image from "next/image";

const Faculty = () => {
  const images = [
    {
      imageUrl: "Faculty/fac1.svg",
      memberName: "PROF SWARNALATHA P",
      memberDesgn: "FACULTY COORDINATOR",
    },
    {
      imageUrl: "/Faculty/image 20.svg",
      memberName: "PROF RAJU",
      memberDesgn: "FACULTY COORDINATOR",
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
            <div className="mb-4">
              <div className="text-2xl font-bold tracking-wide md:text-4xl mb-1 mt-8 text-white uppercase">
                Faculty Coordinators
              </div>
            </div>
            <p className="text-md max-sm:text-md mb-8 text-gray-300 pb-10">
              Meet our dedicated faculty coordinators who play a crucial role in
              the smooth functioning of our dance club. They are dedicated
              mentors who guide and inspire the club&apos;s members to explore
              their passion for dance. Our faculty coordinators are the backbone
              of our dance club, fostering a nurturing environment for aspiring
              dancers and ensuring that the club continues to thrive as a hub of
              creativity and expression on our campus.
            </p>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-52 py-12 md:w-4/5">
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
      </div>
    </>
  );
};

export default Faculty;

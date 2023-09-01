import React from "react";
import Image from "next/image";

const Recentperformance: React.FC = () => {
  return (
    <div className="lg:px-64 px-4 pb-16  self-center">
      <div className="lg:px-24 py-10 pb- flex-col flex">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-normal">
          Recent Performances
        </div>
        <div className="text-center text-neutral-400 text-lg md:text-xl lg:text-2xl font-normal leading-7 pt-10 ">
          We have performed in many different stages across India, also
          conquered levels of awards too
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/moodindigoevents.svg"
            alt=""
            height={150}
            width={669}
          />
        </div>
        <div className="sm:px-32 px-8 ">
          <div className="w-full h-6 text-white text-xl md:text-xl lg:text-3xl font-semibold uppercase leading-normal tracking-wide">
            MOOD INDIGO, IIT Mumbai
          </div>
          <div className="py-5 md:py-12"></div>
          <div className="md:w-96 text-white text-sm sm:text-base font-normal leading-7">
            Another amazing performance by our teams securing a new feather in
            the cap for team Mirage and team JNJ Bhangra for the second place in
            Indigo Saga (Thematic Category) and in Sanskriti (Folk Dance
            Category) at MOOD INDIGO
          </div>
          <div className="py-4"></div>
          <div className="w-40 h-12 justify-center items-center inline-flex">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 relative">
                <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md md:text-xl font-normal leading-normal tracking-wide">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-6 px-6 text-white text-xl md:text-xl lg:text-3xl font-semibold uppercase leading-normal tracking-wide pt-6 ">
            world dance day, vit vellore
          </div>
          <div className="py-8 md:py-12"></div>
          <div className="md:w-96 px-4 pl-6 text-white text-sm md:text-base font-normal leading-7">
            Another amazing performance by our teams securing a new feather in
            the cap for team Mirage and team JNJ Bhangra for the second place in
            Indigo Saga (Thematic Category) and in Sanskriti (Folk Dance
            Category) at MOOD INDIGO 2022!
          </div>
          <div className="py-4"></div>
          <div className="w-40 h-12  max-sm:px-10 justify-center items-center inline-flex">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 relative">
                <div className="w-40 h-6 top-2 absolute text-center text-white text-md md:text-xl font-normal leading-normal tracking-wide">
                  Learn more
                </div>
              </div>
              <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
              <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
            </div>
          </div>
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/wddevent2.svg"
            alt=""
            height={50}
            width={669}
          />
        </div>
      </div>
    </div>
  );
};

export default Recentperformance;

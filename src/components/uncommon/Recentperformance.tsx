import React from "react";
import Image from "next/image";

const Recentperformance: React.FC = () => {
  return (
    <div className="backdrop-blur-3xl backdrop-brightness-200">
      <div className="lg:px-24 py-10 pb- flex-col flex">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-normal">
          Recent Performances
        </div>
        <div className="text-center text-neutral-400 text-sm font-normal leading-7 pt-4 ">
          We have performed in many different stages across India, also
          conquered levels of awards too
        </div>
        <hr className="w-5/6 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-3 dark:bg-gray-700"></hr>
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
        <div className="md:px-10">
          <div className="w-full h-6 max-sm:text-center text-white text-md md:text-lg font-semibold uppercase leading-normal tracking-wide pb-10">
            mood indigo, iit bombay
          </div>

          <div className="md:w-98 text-white text-xs font-normal leading-6 text-left justify-center items-center">
          Another amazing performance by our teams securing 
          a new feather in the cap for team Mirage and team 
          JNJ Bhangra  for the second place in Indigo Saga
           (Thematic Category) and in Sanskriti
            (Folk Dance Category) at MOOD INDIGO 2022!
          </div>
          <div className="py-1"></div>
          <button>
          <div className="w-40 h-12 justify-center items-center ">
            <div className="w-40 h-10 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-4 absolute">
                <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md font-normal leading-normal tracking-wide ">
                <div className="flex gap-4 px-5">
                   Learn More
                   <Image
                            src="/icons/sidearrow.svg"
                            alt=""
                            width={7}
                            height={7}
                          />
                          </div>
                </div>
              </div>
            </div>
          </div>
          </button>
        </div>
        <div className="">
          <div className="w-full h-6 max-sm:text-center px-6 text-white text-md md:text-lg font-semibold uppercase leading-normal tracking-wide pt-6 ">
            world dance day, vit vellore
          </div>
          <div className="py-8"></div>
          <div className="md:px-4 md:pl-6 text-white text-xs leading-6 text-left pb-4">
          Missed our world dance day performance?<br/>
          Don't sweat it cause we've bought world dance day to YOU! <br/>
          Presenting a plethora of performances by our very own dance teams <br/>
          click below & enjoy the performance.
          </div>
          <button>
          <div className="pl-10 w-40 h-10  max-sm:px-10 justify-center items-center inline-flex">
            <div className="w-40 h-10 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-4 relative">
                <div className="w-40 h-6 top-2 absolute text-center text-white text-md font-normal leading-normal tracking-wide">
                 <div className="flex gap-4 px-5">
                  Learn More
                  <Image
                            src="/icons/sidearrow.svg"
                            alt=""
                            width={7}
                            height={7}
                          />
                          </div>
                </div>
              </div>
              <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
              <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
            </div>
          </div>
          </button>
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
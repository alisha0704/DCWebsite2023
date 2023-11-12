import React, { useState } from "react";
import Image from "next/image";
import Internalevents from "@/components/uncommon/Internalevents";
import Externalevents from "@/components/uncommon/Externalevents";
import Link from "next/link";

const Events = () => {
  const [displayInternalEvents, setDisplayInternalEvents] = useState(true);

  const handleInternalClick = () => {
    setDisplayInternalEvents(true);
  };

  const handleExternalClick = () => {
    setDisplayInternalEvents(false);
  };
  return (
    <>
      <div className="backdrop-blur-2xl ">
        <div className="text-white font-bold text-4xl pt-6 text-center">
          OUR EVENTS
        </div>
        <p className="text-lg text-center font-medium py-4">
          Brace yourself for a high-octane dose of entertainment. Here are the
          events we performed lately.
        </p>

        <div className="border border-gray-600" />
        <div className="text-center text-3xl py-6 font-bold">Riviera</div>
        <div className="flex items-center">
          <div className="">
            <Image
              src="/events/IMG-20230305-WA0029 6.svg"
              alt=""
              height={1000}
              width={1000}
            />
          </div>
          <div>
            <div className="relative group">
              <div className="flex flex-col  md:flex-row ">
                <Image
                  src="/Frame 92.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="absolute pt-3"
                />
                <Image
                  src="/Frame 89.png"
                  alt=""
                  height={1175}
                  width={1175}
                  className="opacity-1 relative hover:opacity-[0%] pt-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <div className="w-full px-10 gap-12 max-w-screen-lg flex flex-col md:flex-row justify-around">
            <Image
              src="/events/pradeep.svg"
              alt="Image 1"
              className="w-1/3"
              height={100}
              width={100}
            />

            <Image
              src="/events/jishnu.svg"
              alt="Image 2"
              className="w-1/3"
              height={100}
              width={100}
            />

            <Image
              src="/events/raghavan.svg"
              alt="Image 3"
              className="w-1/3"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="border border-gray-600 border-t-0 border-l-0 border-r-0 py-4" />
        <div className="text-center text-3xl py-6 font-bold">
          World Dance Day
        </div>
        <div className="flex  items-center py-4">
          <div className="">
            <Image
              src="/events/Events2.svg"
              alt=""
              height={1000}
              width={1000}
            />
          </div>
          <div className="flex items-center relative group">
            <Link href="https://www.youtube.com/playlist?list=PL2AAy2dym7040Yesecx7_eRBhmxSETbuH">
              <div className="pb-2 relative">
                <Image
                  src="/events/events2hover.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="pt-1 absolute top-0"
                />
                <Image
                  src="/Frame 86.png"
                  alt=""
                  height={1030}
                  width={1030}
                  className=" opacity-1 hover:opacity-[0%] relative pt-1 "
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="text-center text-4xl py-10 font-extrabold">
          Other Events & Workshops
        </div>

        <div className="backdrop-brightness-200 backdrop-blur-2xl">
          <div className="flex justify-center items-center gap-12 py-4">
            <button
              className={`text-white font-bold py-2 px-4 rounded-full border hover:bg-slate-100 hover:bg-opacity-20 ${
                displayInternalEvents ? "bg-slate-100 bg-opacity-20" : ""
              }`}
              onClick={handleInternalClick}
            >
              Internal
            </button>
            <button
              className={`text-white font-bold py-2 px-4 rounded-full border hover:bg-slate-100 hover:bg-opacity-20 ${
                !displayInternalEvents ? "bg-slate-100 bg-opacity-20" : ""
              }`}
              onClick={handleExternalClick}
            >
              External
            </button>
          </div>
          {displayInternalEvents ? <Internalevents /> : <Externalevents />}
        </div>
      </div>
    </>
  );
};

export default Events;

import React, { useState } from "react";
import Image from "next/image";
import Internalevents from "@/components/uncommon/Internalevents";
import Externalevents from "@/components/uncommon/Externalevents";

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
      <div className="text-white font-extrabold text-4xl text-center">
        OUR EVENTS
        <p className="text-base font-medium py-3">
          Brace yourself for a high-octane dose of entertainment. Here are the
          events we performed lately.
        </p>
      </div>
      <div className="border border-gray-600" />
      <div className="text-center text-4xl py-4 font-extrabold">Riviera</div>
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
            <Image
              src="/events/Group 636.png"
              alt=""
              width={1000}
              height={1000}
              className="pt-3 absolute top-0"
            />
            <Image
              src="/events/IMG-20230305-WA0029 6.svg"
              alt=""
              height={1000}
              width={1000}
              className="opacity-1 hover:opacity-[0%] relative top-[17.5%] pt-3"
            />
            <div className="absolute top-0  left-0 text-white px-10">
              <div className="py-6 mt-12 group-hover:block hidden">
                Get ready to dance your heart out with our incredible lineup of
                five sensational events! From fierce battles to creative
                competitions, our events promise non-stop excitement and
                electrifying performances. Join us in celebrating the power of
                dance, where every move tells a story and every beat ignites
                your spirit, exclusively at Riviera.
              </div>
              <div className="py-6 mt-12 group-hover:hidden block">
                Riviera is VIT&apos;s mega cultural and sports carnival; and the
                Dance Club has an opportunity every year to perform on this
                occasion. With thousands in the crowd, you will see us shine and
                dazzle on this amazing stage.
              </div>
              <button className="text-white text-md tracking-wide font-normal py-1 px-8 rounded-md border hover:bg-slate-100 hover:bg-opacity-20 ">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-600 border-t-0 border-l-0 border-r-0 py-4" />
      <div className="text-center text-4xl py-4 font-extrabold">
        World Dance Day
      </div>
      <div className="flex items-center py-4">
        <div className="">
          <Image src="/events/Events2.svg" alt="" height={1000} width={1000} />
        </div>
        <div className="flex items-center relative group">
          <div className=" relative">
            <Image
              src="/Group 636.png"
              alt=""
              width={1000}
              height={1000}
              className="pt-1 absolute top-0"
            />
            <Image
              src="/events/Events2.svg"
              alt=""
              height={1000}
              width={1000}
              className=" opacity-1 hover:opacity-[0%] relative "
            />
            <div className="absolute top-0 left-0 text-white px-10">
              <div className="py-6 mt-12 group-hover:text-transparent">
                Riviera is VIT&apos;s mega cultural and sports carnival; and the
                Dance Club has an opportunity every year to perform on this
                occasion. With thousands in the crowd, you will see us shine and
                dazzle on this amazing stage.
              </div>
              <button className="text-white text-md tracking-wide font-normal py-1 px-8 rounded-md border hover:bg-slate-100 hover:bg-opacity-20 ">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-4xl py-10 font-extrabold">
        Other Events & Workshops
      </div>

      <div className="flex justify-center items-center gap-12">
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
    </>
  );
};

export default Events;

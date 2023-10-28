import React from "react";
import Image from "next/image";
import Internalevents from "@/components/uncommon/Internalevents";

const Events = () => {
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
        <div className="w-1/2">
          <Image
            src="/events/IMG-20230305-WA0029 6.svg"
            alt=""
            height={1000}
            width={1000}
          />
        </div>
        <div className="w-1/2 text-white px-10">
          <div>
            Riviera is VIT&apos;s mega cultural and sports carnival; and the
            Dance Club has an opportunity every year to perform on this
            occasion. With thousands in the crowd, you will see us shine and
            dazzle on this amazing stage.
          </div>
        </div>
      </div>
      <div className="border border-gray-600 border-t-0 border-l-0 border-r-0 py-4" />
      <div className="text-center text-4xl py-4 font-extrabold">
        World Dance Day
      </div>
      <div className="flex items-center py-4">
        <div className="w-1/2">
          <Image src="/events/Events2.svg" alt="" height={1000} width={1000} />
        </div>
        <div className="w-1/2 text-white px-10">
          <div>
            WDD is the Dance Club&apos;s annual and flagship performance, which
            we take a lot of pride in. The event consists of all 7 teams
            showcasing their best performances and entertaining the audience for
            the evening.
          </div>
        </div>
      </div>
      <div className="text-center text-4xl py-10 font-extrabold">
        Other Events & Workshops
      </div>

      <div className="flex justify-center items-center gap-12">
        <button className="text-white font-bold py-2 px-4 rounded-full border">
          Internal
        </button>
        <button className="text-white font-bold py-2 px-4 rounded-full border">
          External
        </button>
      </div>
      <Internalevents />
    </>
  );
};

export default Events;
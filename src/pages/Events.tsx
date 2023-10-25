import React from "react";
import Image from "next/image";

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
          Hello 
        </div>
      </div>
    </>
  );
};

export default Events;

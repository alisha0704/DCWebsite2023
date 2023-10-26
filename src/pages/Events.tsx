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
      <div className=" text-2xl py-10 font-semibold">
        ----------Outreach/Collaborations----------------------------------------
      </div>
      <div className=" ">
        Step into a world of dance innovation with our series of collaboration
        dance workshops, brought to you by our dynamic VIT Dance Club.
        We&apos;ve teamed up with renowned influencers, dance maestros and
        seasoned dancers to offer an unparalleled learning experience. Get ready
        to unlock your potential and explore a world of dance styles, from
        street-smart moves to classical elegance. Join us for a dance journey
        like no other, where creativity knows no bounds. Elevate your skills and
        groove alongside the finest in the business. It&apos;s your turn to
        shine on the dance floor. Don&apos;t miss out on these electrifying
        workshops, where the magic of movement meets the wisdom of experts!
      </div>
      <div className="gap-8 columns-3 py-10">
        <Image src="/events/gallery1/image 106.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 106.svg"
        /> */}
        <Image src="/events/gallery1/image 25.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 25.svg"
        /> */}
        <Image src="/events/gallery1/image 109.svg" alt="" height={1000} width={1000} className="w-full mb-6" />

        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 109.svg"
        /> */}

        <Image src="/events/gallery1/image 113.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 113.svg"
        /> */}

        <Image src="/events/gallery1/image 108.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 108.svg"
        /> */}

        <Image src="/events/gallery1/image 107.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 107.svg"
        /> */}

        <Image src="/events/gallery1/image 111.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 111.svg"
        /> */}

        <Image src="/events/gallery1/image 110.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 110.svg"
        /> */}

        <Image src="/events/gallery1/image 112.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 112.svg"
        /> */}
      </div>
      <div className=" text-2xl py-10 font-semibold">
        ----------Other Offline/Online Events----------------------------------------
      </div>
      <div className="gap-4 columns-4 py-10">
        <Image src="/events/gallery2/image 24.svg" alt="" height={1000} width={1000} className="w-full mb-6 mt-16" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 106.svg"
        /> */}
        <Image src="/events/gallery2/image 124.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 25.svg"
        /> */}
        <Image src="/events/gallery2/image 135.svg" alt="" height={1000} width={1000} className="w-full mb-6" />

        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 109.svg"
        /> */}

        <Image src="/events/gallery2/image 122.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 113.svg"
        /> */}

        <Image src="/events/gallery2/image 125.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 108.svg"
        /> */}

        <Image src="/events/gallery2/image 132.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 107.svg"
        /> */}

        <Image src="/events/gallery2/image 27.svg" alt="" height={1000} width={1000} className="w-full mb-6 pt-10" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 111.svg"
        /> */}

        <Image src="/events/gallery2/image 26.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-video mb-6"
          src="/events/gallery1/image 110.svg"
        /> */}

        <Image src="/events/gallery2/image 133.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 112.svg"
        /> */}
         <Image src="/events/gallery2/image 123.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 112.svg"
        /> */}
         <Image src="/events/gallery2/image 28.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 112.svg"
        /> */}
         <Image src="/events/gallery2/image 134.svg" alt="" height={1000} width={1000} className="w-full mb-6" />
        {/* <img
          className="w-full aspect-square mb-6"
          src="/events/gallery1/image 112.svg"
        /> */}
      </div>
    </>
  );
};

export default Events;

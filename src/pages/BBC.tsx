import React from "react";
import Image from "next/image";

const BBC = () => {
  return (
    <>
      <div className="text-3xl text-center font-extrabold">
        BOLLYWOOD BADMAASH COMPANY
      </div>
      <div className="text-center justify-center text-sm text-gray-400">
        We are known for giving breathtaking performances with a tinge of
        badtameezi, a pinch of badmashi and a whole lot of dance. With our
        vibrant & energetic moves, and captivating expressions, our dancers
        makes experience everyone the heart of Bollywood&apos;s film industry
        and its culture.
      </div>
      <hr className="my-5" />
      <div>
        <Image
          src="/BBC/bbc(1).svg"
          alt="BBC"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="py-10 text-center justify-center flex border rounded-3xl mt-10">
        <Image src="/BBC/Frame 11.svg" alt="BBC" width={40} height={40} />
        <div className="px-5 py-2 font-bold text-xl">
          {" "}
          The Junior Dance Team of Bollywood Badmaash Company is{" "}
          <span className="text-[#BBC1FF]"> Bollywood Bandits </span>{" "}
        </div>
      </div>
      <div className="gap-4 columns-3 py-10">
        <Image
          src="/BBC/Shubhagi.svg"
          alt="BBC"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold">SHUBHANGI TIWARI</div>
        <div className="text-center text-xs text-gray-400 font-semibold ">
          TEAM REPRESENTATIVE
        </div>
        <Image src="/BBC/nikhil.svg" alt="BBC" width={500} height={500} />
        <div className="text-center pt-4 font-semibold">NIKHIL AGARWAL</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          TEAM HEAD
        </div>
        <Image
          src="/BBC/satwik.svg"
          alt="BBC"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold">SATWIK TRIPATHY</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          JDC COORDINATOR - LAASYA
        </div>
      </div>
      <div className="text-3xl text-center font-extrabold">Mini-Gallery</div>
      <div className="text-center justify-center text-sm text-gray-400">
        Glimpse of our latest performances throughout many events
      </div>
      <div className="gap-4 columns-2 py-4">
        <Image src="/BBC/IMG-20230305-WA0029 1.svg" alt="BBC" width={500} height={500} />
        
      </div>
    </>
  );
};

export default BBC;

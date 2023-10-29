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
        makes experience everyone the heart of Bollywood&apos;s film industry and its
        culture.
      </div>
      <hr className="my-5" />
      <div>
        <Image src="/BBC/bbc(1).svg" alt="BBC" width={500} height={500} className="w-full"/>
      </div>
    </>
  );
};

export default BBC;

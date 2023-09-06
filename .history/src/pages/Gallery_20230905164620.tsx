import React, { useEffect, useState } from "react";
import Image from "next/image";
import FullpageLoader from "@/components/common/FullpageLoader";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
    return () => {
      sessionStorage.removeItem("scrollPosition");
    };
  }, []);
  return (
    <>

      <div className="">
        <div>
        <div className="text-center text-white text-2xl md:text-4xl lg:text-5xl px-4 font-normal leading-10 md:mb-4">
          The Gallery
        </div>
        <div className="text-center text-gray-400 text-md md:text-lg lg:text-xl font-normal px-4 leading-10 mb-8">
          A room to witness a glimpse of our performances and styles
        </div>
        <div className="flex max-sm:px-6 justify-center">
          <Image
            src="/GalleryFinal.png"
            alt="Gallery"
            width={1000}
            height={300}
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

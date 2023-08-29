import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="">
      <div className="text-center text-white text-5xl font-normal leading-10 mb-4">
        The Gallery
      </div>
      <div className="text-center text-gray-400 text-xl font-normal leading-10 mb-8">
        A room to witness a glimpse of our performances and styles
      </div>
      <div className="flex justify-center">
      <Image
        src="/GalleryFinal.png"
        alt="Gallery"
        width={1000}
        height={300}
      />
      </div>
      </div>
  );
};

export default Gallery;

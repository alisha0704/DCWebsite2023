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

      <div>
        <div className="w-653 h-359 inline-flex">
          <Image src="/gallery/gallery1.svg" width={653} height={359} alt="" />
        </div>

        <div className="w-259 h-439 inline-flex">
          <Image src="/gallery/gallery2.png" width={259} height={439} alt="" />
        </div>

        <div className="w-927 h-387 inline-flex">
          <Image src="/gallery/gallery3.svg" width={927} height={387} alt="" />
        </div>

        <div className="w-653 h-372 inline-flex -pt-">
          <Image src="/gallery/gallery4.svg" width={653} height={372} alt="" />
        </div>

        <div className="w-259 h-577 inline-flex">
          <Image src="/gallery/gallery5.svg" width={259} height={577} alt="" />
        </div>

        <div className="w-427 h-630 inline-flex">
          <Image src="/gallery/gallery6.svg" width={427} height={630} alt="" />
        </div>

        <div className="w-531 h-328 inline-flex">
          <Image src="/gallery/gallery7.svg" width={531} height={328} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

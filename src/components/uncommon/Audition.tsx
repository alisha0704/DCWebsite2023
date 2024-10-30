import React from "react";
import Image from "next/image";
import Link from "next/link";
const Audition = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:py-8 py-14 max-sm:mt-10 max-sm:mb-10  ">
        <div className="text-xl md:text-2xl lg:text-3xl mb-2 text-left px-8 text-white flex-1 ">
          Want to be a part of this{" "}
          <span style={{ color: "#DA3598" }}>family?</span>
          <p>
            <span style={{ color: "#DA3598" }}>VIT Dance Club</span> auditions
            will be happening from
            <span style={{ color: "#DA3598" }}> January to March</span> every
            year. Stay tuned to our Instagram handle for more updates.
          </p>
        </div>
        <div className="flex-1 lg:ml-10">
          <div className="relative">
            <Link href="https://www.instagram.com/vitdanceclub/">
              <Image
                src="/Group 645.png"
                alt="Auditions"
                height={500}
                width={500}
                className="w-45 h-45 object-cover rounded-t"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audition;

import React from "react";
import Image from "next/image";
const Audition = () => {
  return (
    <>
      <div className="flex md:flex-row items-center py-8 ">
        <div className="text-xl md:text-3xl lg:text-3xl mb-2 text-left text-white flex-1 ">
          Want to be a part of this{" "}
          <span style={{ color: "#3947E2" }}>family?</span>
          <p>
            <span style={{ color: "#3947E2" }}>VIT Dance Club</span> auditions
            will be happening from
            <span style={{ color: "#3947E2" }}> January to March</span> every
            year. Stay tuned to our Instagram handle for more updates.
          </p>
        </div>
        <div className="flex-1 ml-10">
          <div className="relative">
            <Image
              src="/auditionscombined.svg"
              alt="Auditions"
              height={500}
              width={500}
              className="w-45 h-45 object-cover rounded-t"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Audition;

import React from "react";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });
const Bulltein = () => {
  return (
    <>
      <div className="py-16"></div>
      <div className="flex flex-col lg:flex-row lg:gap-24 justify-center backdrop-blur-2xl backdrop-brightness-200 py-10 px-6">
        <div className="text-xl md:text-3xl lg:text-4xl tracking-wide text-center lg:text-left py-4 md:py-20">
          We&apos;re more than <span className="font-bold"> dancers;</span>{" "}
          <br />
          we&apos;re a <span className="font-bold">family.</span> Bound by
          <br />
          passion, united by rhythm,
          <br /> and fueled by the <span className="font-bold">
            love
          </span> for <br /> movement.
        </div>

        <div className="border border-white px-8 rounded-xl py-4">
          <div className="font-bold text-lg md:text-xl lg:text-3xl text-center">
            <div className={monte.className}>Bulletin Board</div>
          </div>
          <hr className="border-white py-2" />
          <div className="">
            <ul className="list-disc">
              <li className="max-sm:text-sm">Founded in 2003.</li>
              <li className="text-[#CDD2FF] max-sm:text-sm">
                Recipient of the Best Club Award for <br />
                multiple consecutive academic years.
              </li>
              <li className="text-sm">Organizing over 20 events annually.</li>
              <li className="text-[#CDD2FF] max-sm:text-sm">
                Active participation in all events hosted by <br />
                VIT Management.
              </li>
              <li className="max-sm:text-sm">
                Hosts numerous online and offline <br />
                workshops.
              </li>
              <li className="text-[#CDD2FF] max-sm:text-sm">
                Recognitions and awards from a global <br />
                audience.
              </li>
              <li className="max-sm:text-sm">
                Offers the 2-credit course &quot;ABCD&quot; as part of <br />
                the academic curriculum.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulltein;

import React from "react";

const Bulltein = () => {
  return (
    <>
      <div className="flex gap-24 justify-center backdrop-blur-2xl py-10">
        <div className="text-5xl text-left py-20">
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
          <div className="font-bold text-3xl text-center">Bulletin Board</div>
          <hr className="border-white py-2" />
          <div>
            <ul className="list-disc">
              <li>Founded in 2003</li>
              <li className="text-[#CDD2FF]">
                Recipient of the Best Club Award for <br />
                multiple consecutive academic years
              </li>
              <li>Organizing over 20 events annually</li>
              <li className="text-[#CDD2FF]">
                Active participation in all events hosted by <br />
                VIT Management
              </li>
              <li>
                Hosts numerous online and offline <br />
                workshops
              </li>
              <li className="text-[#CDD2FF]">
                Recognitions and awards from a global <br />
                audience
              </li>
              <li>
                Offers the 2-credit course &quot;ABCD&quot; as part of <br />
                the academic curriculum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulltein;

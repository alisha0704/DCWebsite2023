import React from "react";
import Image from "next/image";

const Externalevents = () => {
  return (
    <div>
      <div className="text-lg md:text-xl lg:text-2xl flex py-10 font-bold uppercase gap-8 px-3">
        <Image
          src="/line.svg"
          alt="Board"
          width={110}
          height={400}
          className="max-lg:hidden"
        />
        Srishti School 2022
        <Image
          src="/line.svg"
          alt="Board"
          width={390}
          height={390}
          className="max-lg:hidden"
        />
      </div>
      <div className="px-5 text-lg">
        Dance club conducted workshops at Srishti school, near VIT Vellore for
        the academic years 2022 and 2023. We believe that learning should be a
        joyful experience. Our fun dance workshop for school kids is designed to
        do just that! We create an exciting and interactive environment where
        kids not only learn the art of dance but also develop confidence,
        coordination, and teamwork. Through creative movements and music, our
        little dancers embark on a journey of self-expression and discovery.
        Watch your child&apos; face light up as they dance their way to new
        skills and unforgettable memories
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8 py-10 px-8">
        <Image
          src="/events/srishti1.svg"
          alt=""
          height={300}
          width={300}
          className=""
        />

        <Image
          src="/events/srishti2.svg"
          alt=""
          height={300}
          width={300}
          className=""
        />

        <Image
          src="/events/srishti3.svg"
          alt=""
          height={300}
          width={300}
          className=""
        />
      </div>
      <div className="text-lg md:text-xl lg:text-2xl flex py-10 font-bold uppercase gap-8 px-3">
        <Image
          src="/line.svg"
          alt="Board"
          width={110}
          height={400}
          className="max-lg:hidden"
        />
        <div className="text-center">Srishti School 2023</div>
        <Image
          src="/line.svg"
          alt="Board"
          width={390}
          height={390}
          className="max-lg:hidden"
        />
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 py-10 px-8">
        <Image
          src="/events/srishti4.svg"
          alt=""
          height={300}
          width={300}
          className=""
        />

        <Image
          src="/events/srishti5.svg"
          alt=""
          height={300}
          width={300}
          className=""
        />

        <Image
          src="/events/srishti6.svg"
          alt=""
          height={300}
          width={300}
          className=""
        />
      </div>
    </div>
  );
};

export default Externalevents;

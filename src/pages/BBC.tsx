import React from "react";
import Image from "next/image";
import Link from "next/link";

const BBC = () => {
  return (
    <>
    <div className="backdrop-blur-2xl">
      <div className="flex items-center justify-center">
        <Image
          src="/BBC/bbc logo-white 1.svg"
          alt="BBC"
          width={150}
          height={150}
        />
      </div>

      <div className="lg:text-3xl text-xl md:text-2xl text-center font-extrabold">
        BOLLYWOOD BADMAASH COMPANY
      </div>
      <div className="text-center justify-center text-sm text-gray-400">
        We are known for giving breathtaking performances with a tinge of
        badtameezi, a pinch of badmashi and a whole lot of dance. With our
        vibrant & energetic moves, and captivating expressions, our dancers
        makes everyone experience the heart of Bollywood&apos;s film industry
        and its culture.
      </div>
      <hr className="w-3/4 h-0.5 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="py-8">
        <Image
          src="/BBC/bbc(1).svg"
          alt="BBC"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="flex justify-center">
        <div className="px-10 flex items-center max-md:hidden">
        <hr className="w-30 h-0.5 mx-auto bg-gray-700 border-0 rounded md:my-10" />
        </div>
        <div className="py-6 text-center justify-center flex border rounded-3xl">
          <Image src="/BBC/Frame 11.svg" alt="BBC" width={40} height={40} className="pl-2" />
          <div className="px-5 py-2 font-bold text-sm md:text-lg">
            The Junior Dance Team of Bollywood Badmaash Company is{" "}
            <span className="text-[#BBC1FF]"> Bollywood Bandits </span>
          </div>
        </div>
        <div className="px-10 flex items-center max-md:hidden">
        <hr className="w-30 h-0.5 mx-auto bg-gray-700 border-0 rounded md:my-10" />
        </div>
      </div>

      <div className="gap-4 columns-1 md:columns-3 py-10">
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
        <Image src="/BBC/nikhil.svg" alt="BBC" width={500} height={500} className="max-sm:pt-12" />
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
      <div className="md:text-3xl text-2xl text-center font-extrabold">Mini-Gallery</div>
      <div className="text-center justify-center text-xs md:text-sm text-gray-400">
        Glimpse of our latest performances throughout many events
      </div>
      <div className="gap-4 columns-2 py-4">
        <Image
          src="/BBC/IMG-20230305-WA0029 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6"
        />
        <Image
          src="/BBC/004A7986 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6"
        />
        <Image
          src="/BBC/DSC_9641 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6"
        />

        <Image
          src="/BBC/bbc wdd 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6"
        />

        <Image
          src="/BBC/004A7993 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6"
        />

        <Image
          src="/BBC/DSC_9710 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6"
        />

        <Image
          src="/BBC/IMG-20230616-WA0003 1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full mb-6 pt-10"
        />
      </div>
      <div className="backdrop-blur-2xl backdrop-brightness-200">
      <div className="lg:px-24 py-10 pb- flex-col flex">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-medium">
          Recent Performances
        </div>
        <div className="text-center text-neutral-400 pt-3 font-normal ">
          We have performed in many different stages across India, also
          conquered levels of awards too
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <Image
            className="h-auto max-w-full pb-8 px-8 rounded-lg"
            src="/BBC/4 2.svg"
            alt=""
            height={150}
            width={669}
          />
        </div>
        <div className="md:px-10">
          <div className="w-full h-6 max-sm:text-center text-white text-md md:text-lg font-semibold uppercase leading-normal tracking-wide pb-10">
            World dance day, vit vellore
          </div>

          <div className="md:w-96 text-white text-sm sm:text-base font-normal leading-7 text-left justify-center items-center">
            Experience a mesmerizing celebration of rhythm and culture paying
            ode to World Dance Day with our dynamic performance.It is a night of
            breathtaking choreography and boundless creativity as we pay homage
            to the universal language of dance.
          </div>
          <div className="py-2"></div>
          <Link href="https://www.youtube.com/watch?v=uhGysVr3YrQ">
          <div className="w-40 h-12 justify-center items-center ">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 hover:opacity-30 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 absolute">
                <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md md:text-lg font-normal leading-normal tracking-wide ">
                  Watch Now
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div className="">
          <div className="w-full h-6 max-sm:text-center px-6 text-white text-md md:text-lg font-semibold uppercase leading-normal tracking-wide pt-6 ">
            international dance day, vit vellore
          </div>
          <div className="py-8"></div>
          <div className="md:px-4 md:pl-6 text-white text-sm leading-7 text-left pb-4">
            Missed our International dance day performance? Don&apos;t sweat it
            cause we&apos;ve bought international dance day TO YOU! <br />{" "}
            Presenting a plethora of performances by our very own dance teams.
            click below & enjoy the performance.
          </div>
          <div className="pl-10 w-40 h-10  max-sm:px-10 justify-center items-center inline-flex">
            <Link href="https://youtu.be/_6ZZQzl2kQ8?si=ankmnng4p4CZuoom">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 hover:opacity-30 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 relative">
                <div className="w-40 h-6 top-2 absolute text-center text-white text-md md:text-lg font-normal leading-normal tracking-wide">
                  Watch Now
                </div>
              </div>
              <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
              <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
            </div>
            </Link>
          </div>
        </div>
        <div className="p-8">
          <Image src="/BBC/image 156.svg" height={150} width={669} alt="" />
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default BBC;

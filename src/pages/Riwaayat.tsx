import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });
const Riwaayat = () => {
  return (
    <>
      <div className="backdrop-blur-2xl  md:px-8">
        <div className="flex items-center justify-center">
          <Image
            src="/Riwaayat/Screenshot_2023-03-12-15-57-16-62_7352322957d4404136654ef4adb64504-removebg-preview 1.svg"
            alt="BBC"
            width={150}
            height={150}
          />
        </div>
        <div className="text-center text-white text-xl md:text-xl lg:text-3xl font-extrabold px-4  leading-12 tracking-widest md:mb-4">
          RIWAAYAT
        </div>
        <div className="text-center justify-center text-sm text-gray-400">
          Riwaayat believes in presenting Kathak in the most authentic and
          classical manner possible. A team known for its emotive style, do not
          underestimate the power we are capable of generating with our rapid
          footwork and breakneck chakkars.This team is known for its 3Gs-Girls,
          Grace and Growth.From depicting stories of Lord Krishna to choosing
          some of the most recent, trending songs, we have something for
          everyone in the audience.
        </div>
        <hr className="w-3/4 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <div className="py-8">
          <Image
            src="/Riwaayat/Riwaayat 1 2.svg"
            alt="BBC"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="flex justify-center">
          <div className="px-10 flex items-center max-md:hidden">
            <hr className="w-12 lg:w-44 h-0.5 mx-auto bg-gray-700 border-0 rounded md:my-10 max-md:hidden" />
          </div>
          <div className="py-6 text-center md:justify-center flex border rounded-3xl">
            <Image
              src="/BBC/Frame 11.svg"
              alt="BBC"
              width={40}
              height={40}
              className="pl-2  "
            />
            <div className="md:px-5 px-1 py-1 md:py-2 font-bold text-sm lg:text-lg">
              The Junior Dance Team of Riwaayat is{" "}
              <span className="text-[#BBC1FF]"> Inaayat </span>
            </div>
          </div>
          <div className="px-10 flex items-center max-md:hidden">
            <hr className="w-12 lg:w-44 h-0.5 mx-auto bg-gray-700 border-0 rounded md:my-10 max-md:hidden" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-10">
            
        <div className="flex flex-col items-center w-full md:w-1/3">
  <Image
    src="/Riwaayat/Sanskriti.png"
    alt="BBC"
    width={300}
    height={367}
    className="pt-12"
  />
  <div className="text-center pt-4 font-semibold">SANSKRITI</div>
  <div className="text-center text-xs text-gray-400 font-semibold uppercase">
    TEAM REPRESENTATIVE
  </div>
</div>


            {/* Second Item (Nikhil Agarwal - Middle one, positioned higher) */}
            <div className="flex flex-col items-center w-full md:w-1/3" style={{ marginTop: '-50px' }}>
              <Image
                src="/Riwaayat/Riwaayat_TeamHead 1.png"
                alt="BBC"
                width={500}
                height={500}
                className="pt-12"
              />
              <div className="text-center pt-4 font-semibold uppercase">MRIDULA</div>
              <div className="text-center text-xs text-gray-400 font-semibold uppercase">
                TEAM HEAD
              </div>
            </div>

            
            <div className="flex flex-col items-center w-full md:w-1/3">
              <Image
                src="/Riwaayat/Tanushree.png"
                alt="BBC"
                width={500}
                height={500}
                className="pt-12"
              />
              <div className="text-center pt-4 font-semibold uppercase">TANUSHREE</div>
              <div className="text-center text-xs text-gray-400 font-semibold uppercase">
                JDC COORDINATOR - INAAYAT
              </div>
            </div>
          </div>

        <div className=" text-xl md:text-2xl text-center font-extrabold">
          Mini-Gallery
        </div>
        <div className="text-center justify-center text-xs md:text-sm text-gray-400 pb-6">
          Glimpse of our latest performances throughout many events
        </div>
        <div className="py-4">
          <Image
            src="/Riwaayat/Group 132.png"
            alt="BBC"
            width={5000}
            height={5000}
          />
        </div>
        <div className="md:px-6 backdrop-blur-2xl backdrop-brightness-150">
          <div className="lg:px-24 py-10 pb- flex-col flex ">
            <div className="text-center text-xl md:text-2xl text-white font-medium">
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
                src="/Riwaayat/Jnj 1.svg"
                alt=""
                height={150}
                width={669}
              />
            </div>
            <div className="sm:px-2 md:px-10 ">
              <div className="w-full h-6 max-sm:text-center  text-white text-md md:text-lg  font-semibold uppercase leading-normal tracking-wide pb-10">
                World dance day, vit vellore
              </div>

              <div className="md:w-96 text-white text-sm sm:text-base font-normal leading-7 text-center md:text-left justify-center items-center">
                Experience a mesmerizing celebration of rhythm and culture
                paying ode to World Dance Day with our dynamic performance.It is
                a night of breathtaking choreography and boundless creativity as
                we pay homage to the universal language of dance.
              </div>
              <div className="py-2"></div>
              <Link href="https://youtu.be/5U2Gx6UEOx0?si=YE9bm4DN_VG18NBT">
                <div className="flex max-sm:justify-center max-sm:items-center">
                  <div className="w-40 h-12 justify-center items-center ">
                    <div className="w-40 h-12 relative bg-white bg-opacity-10 hover:opacity-30 rounded-sm flex-col justify-start items-start flex">
                      <div className="w-40 h-6 absolute">
                        <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md md:text-lg font-normal leading-normal tracking-wide ">
                          Watch Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="sm:px-2 md:px-5">
              <div className="w-full h-6 max-sm:text-center px-6 text-white text-md md:text-lg font-semibold uppercase leading-normal tracking-wide pt-6 ">
                international dance day, vit vellore
              </div>
              <div className="py-8"></div>
              <div className="md:px-4 md:pl-6 text-white sm:text-base font-normal text-center md:text-left leading-7  pb-4">
                Missed our International dance day performance? Don&apos;t sweat
                it cause we&apos;ve bought international dance day TO YOU!{" "}
                <br /> Presenting a plethora of performances by our very own
                dance teams. click below & enjoy the performance.
              </div>
              <Link href="https://youtu.be/GQPRtPhJY3M?si=EbWz4ZYcY6tLiZBx">
                <div className="flex max-sm:justify-center max-sm:items-center">
                  <div className="pl-12 w-40 h-10  max-sm:px-10 justify-center items-center inline-flex">
                    <div className=" w-40 h-12 relative bg-white bg-opacity-10 hover:opacity-30 rounded-sm flex-col justify-start items-start flex">
                      <div className="w-40 h-6 relative">
                        <div className="w-40 h-6 top-2 absolute text-center text-white text-md md:text-lg font-normal leading-normal tracking-wide">
                          Watch Now
                        </div>
                      </div>
                      <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
                      <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-8">
              <Image
                src="/Riwaayat/image 156 (2).svg"
                height={150}
                width={669}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Riwaayat;

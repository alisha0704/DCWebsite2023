import React from 'react';
import Image from 'next/image';

type UnitrixProps = {
    
};

const Unitrix:React.FC<UnitrixProps> = () => {
    
    return (
        <div className="xl:w-full lg:w-9/10 w-full mx-auto text-left border-solid border-white px-2">
    <div className="flex max-sm:px-6 justify-center">
            <Image
              src="/Unitrix/unilogo.svg"
              alt="Unitrix"
              width={100}
              height={100}
            />
          </div>
    <div className="text-center text-white text-lg md:text-xl lg:text-2xl font-extrabold px-4  leading-12 tracking-widest md:mb-4">
      UNITRIX
    </div>
    <div className="text-center text-gray-400 text-sm md:text-md lg:text-md font-normal mb-8">
    We are Unitrix, the hip hop crew of VIT Dance Club. We adopt a versatile blend of extraordinary styles from popping to 
    locking, waacking  to electro, house to lite feet and obviously freestyle. We are always excited to explore more styles
     and push outside of our comfort zone.
    </div>
    <div className='flex max-sm:px-6 justify-center'>
    <Image
              src="/Unitrix/unigroup.svg"
              alt="Unitrix"
              width={1000}
              height={1000}
            />
    </div>
    <div className="py-10 text-center justify-center flex border rounded-3xl mt-10">
        <Image src="/BBC/Frame 11.svg" alt="BBC" width={40} height={40} />
        <div className="px-5 py-2 font-bold text-lg">
          {" "}
          The Junior Dance Team of Unitrix is{" "}
          <span className="text-[#BBC1FF]"> Trixters </span>{" "}
        </div>
      </div>
      <div className="gap-4 columns-3 py-10">
        <Image
          src="/Unitrix/Aditi.svg"
          alt="Unitrix"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold">ADITI SUDHIR</div>
        <div className="text-center text-xs text-gray-400 font-semibold ">
          TEAM REPRESENTATIVE
        </div>
        <Image src="/Unitrix/sanjana.svg"
         alt="Unitrix" width={500} 
         height={500} />
        <div className="text-center pt-4 font-semibold">SANJANA AWASTHI</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          TEAM HEAD 
        </div>
        <Image
          src="/Unitrix/satyendra.svg"
          alt="Unitrix"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold">SATYENDRA G</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          JDC COORDINATOR - TRIXTERS
        </div>
      </div>
      <div className="text-3xl text-center font-extrabold">Mini-Gallery</div>
      <div className="text-center justify-center text-sm text-gray-400">
        Glimpse of our latest performances throughout many events
      </div>
      <div className="flex justify-center py-4">
        <Image src="/Unitrix/unigallery.png" 
        alt="Unitrix"
         width={1000} 
         height={1000} />
      </div>
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
            className="h-auto max-w-full rounded-lg"
            src="/Unitrix/recent1.svg"
            alt="Unitrix"
            height={150}
            width={669}
          />
        </div>
        <div className="px-10">
          <div className="w-full h-6 text-white text-xl md:text-xl lg:text-xl font-semibold uppercase leading-normal tracking-wide pb-10">
            World dance day, vit vellore
          </div>

          <div className="md:w-96 text-white text-sm sm:text-base font-normal leading-7 text-left justify-center items-center">
          Experience a mesmerizing celebration of rhythm and culture paying ode to World Dance Day with our dynamic performance.
          It is a night of breathtaking choreography and boundless creativity as we pay homage to the universal language of dance.
          </div>
          <div className="py-2"></div>
          <div className="w-40 h-12 justify-center items-center ">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 absolute">
                <div className="w-40 h-6 left-0 top-2 absolute text-center text-white text-md md:text-xl font-normal leading-normal tracking-wide ">
                  Watch Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-6 px-6 text-white text-xl md:text-xl lg:text-xl font-semibold uppercase leading-normal tracking-wide pt-6 ">
            international dance day, vit vellore
          </div>
          <div className="py-8"></div>
          <div className="px-4 pl-6 text-white text-sm text-left pb-4">
            Missed our International dance day performance? Don&apos;t sweat it
            cause we&apos;ve bought international dance day TO YOU! <br />{" "}
            Presenting a plethora of performances by our very own dance teams.
            click below & enjoy the performance.
          </div>
          <div className="w-40 h-12  max-sm:px-10 justify-center items-center inline-flex">
            <div className="w-40 h-12 relative bg-white bg-opacity-10 rounded-sm flex-col justify-start items-start flex">
              <div className="w-40 h-6 relative">
                <div className="w-40 h-6 top-2 absolute text-center text-white text-md md:text-xl font-normal leading-normal tracking-wide">
                  Watch Now
                </div>
              </div>
              <div className="w-5 h-5 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-emerald-300 to-green-600 rounded-full blur-xl" />
              <div className="w-6 h-7 origin-top-left rotate-[-34.72deg] bg-gradient-to-b from-pink-400 to-violet-700 rounded-full blur-xl" />
            </div>
          </div>
        </div>
        <div>
          <Image src="/Unitrix/recent2.svg"
           height={150} 
           width={669}
            alt="Unitrix" />
        </div>
      </div>
  </div>
    );
}
export default Unitrix;
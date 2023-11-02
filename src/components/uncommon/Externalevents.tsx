import React from 'react'
import Image from 'next/image'

const Externalevents = () => {
  return (
    <div>
        <div className=" text-2xl flex py-10 font-semibold">
        <Image
                    src="/line.svg"
                    alt="Board"
                    width={110}
                    height={400}
                  />
                  Srishti School 2022
                  <Image
                    src="/line.svg"
                    alt="Board"
                    width={300}
                    height={300}
                  />
      </div>
      <div className=" ">
      Dance club conducted workshops at Srishti school, near VIT Vellore for the academic years 2022 and 2023.
      We believe that learning should be a joyful experience. Our fun dance workshop for school kids is
      designed to do just that! We create an exciting and interactive environment where kids not only learn 
      the art of dance but also develop confidence, coordination, and teamwork. Through creative movements and 
      music, our little dancers embark on a journey of self-expression and discovery. Watch your child&apos; face
      light up as they dance their way to new skills and unforgettable memories
      </div>
      <div className="flex gap-8 py-10">
        <Image
          src="/events/srishti1.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full"
        />

        <Image
          src="/events/srishti2.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full"
        />

        <Image
          src="/events/srishti3.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full"
        />
      </div>
      <div className=" text-2xl flex py-10 font-semibold">
        <Image
                    src="/line.svg"
                    alt="Board"
                    width={110}
                    height={400}
                  />
                  Srishti School 2023
                  <Image
                    src="/line.svg"
                    alt="Board"
                    width={300}
                    height={300}
                  />
      </div>
      <div className="flex gap-8 py-10">
        <Image
          src="/events/srishti4.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full"
        />

        <Image
          src="/events/srishti5.svg"
          alt=""
          height={1200}
          width={1200}
          className="w-full"
        />

        <Image
          src="/events/srishti6.svg"
          alt=""
          height={1000}
          width={1000}
          className="w-full"
        />
      </div>
      
    </div>
  )
}

export default Externalevents
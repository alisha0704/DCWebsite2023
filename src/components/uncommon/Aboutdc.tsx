import Image from "next/image";
import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  time?: number;
  start?: number;
  shouldAnimate: boolean;
}

function AnimatedCounter({
  target,
  time = 2000, // Adjusted time value
  start = 0,
  shouldAnimate,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!shouldAnimate) return;

    const increment = (target - start) / time;
    const animationTime = Math.abs(target - current) / increment;

    const handle = setInterval(() => {
      if (current < target) {
        setCurrent((prevCurrent) => prevCurrent + increment);
      } else {
        clearInterval(handle);
        setCurrent(target);
      }
    }, 1);

    return () => clearInterval(handle);
  }, [current, target, time, start, shouldAnimate]);

  return <span>{Math.round(current)}</span>;
}

const Aboutdc = () => {
  const [animated, setAnimated] = useState({
    students: false,
    mentors: false,
    internships: false,
    bootcamps: false,
    performance: false,
    crewmembers: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const counterName = entry.target.getAttribute("data-counter");
        if (entry.isIntersecting && counterName) {
          setAnimated((prevAnimated) => ({
            ...prevAnimated,
            [counterName]: true,
          }));
        }
      });
    }, observerOptions);

    const counterElements = document.querySelectorAll("[data-counter]");
    counterElements.forEach((element) => {
      observer.observe(element as HTMLElement); // Use type assertion
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="">
        <div className=" mx-auto relative pt-6 md:pt-20 px-1 md:px-10 lg:px-20 pb-16 mb-10">
          <div className="text-white text-xl md:text-3xl lg:text-4xl text-left">
            VIT Dance Club promotes the dance art forms,{" "}
            <span style={{ color: "#A0FF90" }}>regional</span> and{" "}
            <span style={{ color: "#A0FF90" }}>western</span> and gives an
            opportunity to students to perform
          </div>
          <h5 className="text-gray-400 text-sm md:text-base pt-4 text-left">
            Club consists of seven major teams of varied dance forms across India & Winners of various dance competitions across the country.
          </h5>
        </div>

        <div className="flex justify-center pb-6 items-center">
          <div className="py-4 md:backdrop-blur-3xl md:backdrop-brightness-200 items-center lg:w-2/3">
            <div className="flex justify-center items-center space-x-2 md:space-x-6">
              <Image
                src="/icons/flaglogo.png"
                alt="Logo 1"
                width={40}
                height={40}
                style={{ marginRight: "1rem" }}
              />
              <div className="flex flex-col text-white md:px-4">
                <div className="flex text-xl md:text-3xl font-extrabold">7</div>
                <div className="flex font-extralight text-xs md:text-sm">MAJOR TEAMS</div>
              </div>
              <Image
                src="/icons/humanlogo.png"
                alt="Logo 3"
                width={40}
                height={40}
              />
              <div className="flex flex-col text-white md:px-4">
                <div className="flex text-xl md:text-3xl font-extrabold">150K</div>
                <div className="flex font-extralight text-xs md:text-sm">CREW MEMBERS</div>
              </div>
              <Image
                src="/icons/taglogo.png"
                alt="Logo 4"
                width={40}
                height={40}
              />
              <div className="flex flex-col text-white md:px-4">
                <div className="flex text-xl md:text-3xl font-extrabold">
                  <AnimatedCounter
                    target={200}
                    time={2000} // Adjust the time as needed
                    start={200}
                    shouldAnimate={animated.performance}
                  />
                  +
                </div>
                <div className="flex font-extralight text-xs md:text-sm">PERFORMANCES</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-3/5 h-0.5 mx-auto bg-gray-400 border-0 rounded my-5" />
        <div className="text-center">
          <h2 className="text-md text-gray-400">MAJOR PRIZE WINNING STAGES</h2>
          <div className="flex justify-center items-center mt-4">
            <Image
              src="/icons/festlogo.png"
              alt="fests won"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="w-3/5 h-0.5 mx-auto bg-gray-400 border-0 rounded my-5" />
      </div>
    </>
  );
};

export default Aboutdc;

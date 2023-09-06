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
  time = 200000,
  start = 0,
  shouldAnimate,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!shouldAnimate) return;

    const increment = (target - start) / time;
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
    performance: true,
    crewmembers: true,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const counterName = (entry.target as HTMLElement).dataset.counter;
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
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-64">
      <div className="mt-8 ">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">
          VIT Dance Club promotes the dance art forms,{" "}
          <p>
            <span style={{ color: "#3947E2" }}>regional</span> and{" "}
            <span style={{ color: "#3947E2" }}>western</span> and gives an
            opportunity
          </p>{" "}
          to students to perform
        </h1>
        <h5 className="text-gray-400 text-xs md:text-sm pt-4">
          Winners of various dance competitions across the country & club
          consists of seven major teams of varied dance forms across India.
        </h5>
      </div>
      <div className="py-10">
        <div className="flex justify-center items-center mt-8 space-x-1 md:space-x-6">
          <Image
            src="/icons/flaglogo.png"
            alt="Logo 1"
            width={40}
            height={40}
            style={{ marginRight: "1rem" }}
          />
          <div className="flex flex-col text-white gap-1">
            <div className="flex pt-8 text-3xl font-extrabold"> 7</div>
            <div className="flex font-extralight text-xs md:text-sm">
              MAJOR TEAMS
            </div>
          </div>
          <Image
            src="/icons/humanlogo.png"
            alt="Logo 3"
            width={40}
            height={40}
          />
          <div className="flex flex-col text-white gap-1">
            <div className="flex pt-8 text-3xl font-extrabold">
              <AnimatedCounter
                target={150}
                time={50}
                start={140}
                shouldAnimate={animated.crewmembers}
              />
              +
            </div>
            <div className="flex font-extralight text-xs md:text-sm ">
              CREW MEMBERS
            </div>
          </div>
          <Image src="/icons/taglogo.png" alt="Logo 4" width={50} height={50} />
          <div className="flex flex-col text-white gap-1">
            <div className="flex pt-8 text-3xl font-extrabold">
              <AnimatedCounter
                target={200}
                time={50}
                start={190}
                shouldAnimate={animated.performance}
              />
              +
            </div>
            <div className="flex font-extralight text-xs md:text-sm">
              PERFORMANCES
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 py-6">
        <h2 className="text-xs md:text-sm text-gray-400">
          MAJOR PRIZE WINNING STAGES
        </h2>
        <div className="flex justify-center px-4 items-center mt-4">
          <Image
            src="/icons/festlogo.png"
            alt="fests won"
            width={800}
            height={200}
          />
        </div>
      </div>
      </div>
  );
};

export default Aboutdc;

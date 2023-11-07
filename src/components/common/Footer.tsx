import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { PiYoutubeLogo } from "react-icons/pi";
import Image from "next/image";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className=" backdrop-blur-3xl gap-y-2 justify-around flex flex-col sm:flex-row border-t-[1px] border-gray-700 pt-12 lg:items-stretch items-stretch">
      <div className="max-sm:ml-8">
        <div
          className={`text-[#A7A9BE] flex flex-col pt-6 text-left text-[1rem] font-semibold gap-1`}
        >
          <div className="flex flex-col md:items-center">
            <Image src="/DClogo.png" alt="DC Logo" width={80} height={80} />
            <text className="text-xl mt-2">VIT DANCE CLUB</text>
          </div>

          <div className="mt-16 md:ml-10 flex md:items-center"> 
            <IoLocationOutline size="2em" />
            <div className="ml-2 text-lg">
              <p>Vellore Institute of Technology</p>
              <p>Katpadi, Vellore, Tamil Nadu</p>
            </div>
          </div>
          <div className="mt-16 md:ml-10 flex  md:items-center">
            <IoCallOutline size="2em" />
            <div className="ml-2 text-lg">
              <p>+91 9840466868</p>
              <p>+91 8078281652</p>
            </div>
          </div>
          <div className="mt-16 md:ml-10 flex md:items-center">
            <AiOutlineMail size="2em" />
            <div className="ml-2 text-lg">@vitdcofficial@gmail.com</div>
          </div>
          <div className="text-[#A7A9BE]  md:text-xl text-base pt-10 pb-20 flex md:items-center ml-10">
            <a
              href={"mailto:vitdcofficial@gmail.com"}
              className={`text-black bg-gray-300 font-bold rounded-full text-center sm:px-6 sm:py-5 py-2 px-3 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out `}
            >
              Contact us for queries
            </a>
          </div>
        </div>
      </div>

      <div className="flex md:items-center flex-col ml-8 pt-10">
        <text
          className={`text-gray-400 font-bold text-[1.2rem] lg:text-[1.5rem] pt-12 gap-6 py-10`}
        >
          Information
        </text>
        <div
          className={`text-[#A7A9BE] text-lg flex flex-col pt-8 text-left text-[1rem] font-semibold gap-1`}
        >
          <a href="#" className="py-4 hover:underline">
            Home
          </a>
          <a href="#" className="py-4 hover:underline">
            Gallery
          </a>
          <a href="#" className="py-4 hover:underline">
            Events
          </a>
          <a href="#" className="py-4 hover:underline">
            Certifications
          </a>
          <a href="#" className="py-4 hover:underline">
            Contacts
          </a>
        </div>
      </div>

      <div className="ml-8 py-20">
        <text
          className={`text-gray-400 font-bold text-[1.2rem] lg:text-[1.5rem] pt-14 gap-6 py-10`}
        >
          Social Media
        </text>
        <div
          className={`flex flex-col text-left sm:text-right text-[1rem] font-semibold gap-1 pt-8 py-12 text-[#A7A9BE]`}
        >
          <a
            className="py-3"
            href="https://www.youtube.com/results?search_query=vitdanceclub"
          >
            <PiYoutubeLogo size="3em" />
          </a>
          <a className="py-3" href="https://www.instagram.com/vitdanceclub/">
            <AiOutlineInstagram size="3em" />
          </a>
          <a className="py-3" href={"mailto:vitdcofficial@gmail.com"}>
            <AiOutlineMail size="3em" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;

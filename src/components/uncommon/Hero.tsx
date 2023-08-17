import React from "react";

const Hero = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="w-96 h-72 text-center">
        <span style={{ color: 'white', fontSize: '6xl', fontWeight: 'normal', lineHeight: '10' }}>
          VIT Dance Club promote the dance art form both{" "}
        </span>
        <span style={{ color: 'indigo', fontSize: '6xl', fontWeight: 'normal', lineHeight: '10' }}>
          regional
        </span>
        <span style={{ color: 'white', fontSize: '6xl', fontWeight: 'normal', lineHeight: '10' }}>
          {" "}
          and{" "}
        </span>
        <span style={{ color: 'indigo', fontSize: '6xl', fontWeight: 'normal', lineHeight: '10' }}>
          western
        </span>
        <span style={{ color: 'white', fontSize: '6xl', fontWeight: 'normal', lineHeight: '10' }}>
          {" "}
          and give opportunity for students to perform
        </span>
      </div>
    </div>
  );
};

export default Hero;

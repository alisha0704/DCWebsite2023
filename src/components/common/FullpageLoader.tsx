import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  loading: boolean;
}

const FullpageLoader = ({ loading }: Props) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startBlinking = () => {
      intervalId = setInterval(() => {
        setShowImage((prev) => !prev);
      }, 900);
    };

    const stopBlinking = () => {
      clearInterval(intervalId);
      setShowImage(false);

      setTimeout(() => {
        setShowImage(true);
      }, 900);
    };

    if (loading) {
      startBlinking();
    } else {
      stopBlinking();
    }

    // Cleanup the interval when the component unmounts or loading becomes false
    return () => {
      clearInterval(intervalId);
      setShowImage(false);
    };
  }, [loading]);

  return (
    <div
      className={`w-full font-bronson flex flex-col items-center justify-center gap-4 h-screen overflow-hidden fixed bg-black transition-all duration-700 ease-in-out text-white ${
        loading ? "opacity-100 z-[120]" : "opacity-0 -z-[120]"
      }`}
    >
      <div
        className="image-container"
        style={{
          opacity: showImage ? 1 : 0,
          transition: "opacity 0.7s ease-in-out",
        }}
      >
        <Image
          src="/vitdclogo.svg" // Replace with the actual image source
          alt="Loading Image"
          className="image-class" // Add your image styling class
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default FullpageLoader;

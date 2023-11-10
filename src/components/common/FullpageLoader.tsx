import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  loading: boolean;
}

const FullpageLoader = ({ loading }: Props) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    let blinkCount = 0;
    const totalBlinks = 2; // Blink twice
    const blinkInterval = 1000 / (totalBlinks * 2); // Blink every 1/4th of the total duration

    const blinkImage = () => {
      if (blinkCount < totalBlinks * 2) {
        setShowImage((prev) => !prev);
        blinkCount += 2;
        setTimeout(blinkImage, blinkInterval);
      } else {
        // After blinking n times, hide the image with ease-out transition
        setShowImage(false);

        // After 1 second, make the image visible with ease-in transition
        setTimeout(() => {
          setShowImage(true);
        }, 500);
      }
    };

    if (loading) {
      blinkImage();
    }

    // Cleanup the interval when the component unmounts or loading becomes false
    return () => setShowImage(false);
  }, [loading]);

  return (
    <div
      className={`w-full font-bronson flex flex-col items-center justify-center gap-4 h-screen overflow-hidden fixed bg-black transition-all duration-500 ease-in-out text-white ${
        loading ? "opacity-100 z-[120]" : "opacity-0 -z-[120]"
      }`}
    >
      <div
        className="image-container"
        style={{
          opacity: showImage ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
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

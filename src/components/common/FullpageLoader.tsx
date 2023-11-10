import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  loading: boolean;
}

const FullpageLoader = ({ loading }: Props) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    let blinkCount = 0;
    const blinkInterval = 4000 / 3; // Blink every 1/3 of the total duration

    const blinkImage = () => {
      if (blinkCount < 6) {
        setShowImage((prev) => !prev);
        blinkCount += 1;
        setTimeout(blinkImage, blinkInterval);
      } else {
        setShowImage(false);
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
      {showImage && (
        <Image
          src="/DClogo.png" // Replace with the actual image source
          alt="Loading Image"
          className="image-class" // Add your image styling class check global css
          height={200}
          width={200}
        />
      )}
      <div className="text-4xl max-lg:text-3xl">Loading assets...</div>
    </div>
  );
};

export default FullpageLoader;

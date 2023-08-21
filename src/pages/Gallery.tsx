import React from "react";

const Gallery = () => {
  return (
    <div className="bg-black">
      <h2 className="text-2xl text-white flex items-center font-semibold mb-4">
        The Gallery
      </h2>
      <div
        className="grid grid-cols-2 md:grid-cols-4 "
        style={{ gap: "-12px" }}
      >
        <div className="grid gap-1">
          <div>
            <img className="h-auto max-w-full " src="/Maya.png" alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery5.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery9.svg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-1">
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery11.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery3.svg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-1" style={{ gap: "-12px" }}>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery6.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery14.svg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-1" style={{ gap: "-12px" }}>
          <div>
            <img
              className="h-auto max-w-full "
              src="/gallery/gallery7.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="/gallery/gallery8.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="/gallery/gallery10.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

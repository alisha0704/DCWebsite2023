import React from 'react';
import Masonry from 'react-masonry-css';

type GalleryProps = {};

const Gallery: React.FC<GalleryProps> = () => {
  const breakpointColumnsObj = {
    default: 15,
    1100: 2,
    700: 1,
  };

  const images = [
    '/Maya.png',
    '/gallery/gallery2.png',
    '/gallery/gallery3.svg',
    '/gallery/gallery4.svg',
    '/gallery/gallery5.svg',
    '/gallery/gallery6.svg',
    '/gallery/gallery7.svg',
    '/gallery/gallery8.svg',
    '/gallery/gallery9.svg',
    '/gallery/gallery10.svg',
    '/gallery/gallery11.svg',
    '/gallery/gallery12.svg',
    '/gallery/gallery13.svg',
    '/gallery/gallery14.svg',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h2 className="text-3xl text-white font-bold mb-2">The Gallery</h2>
      <p className="text-lg text-gray-400 text-center">
        A room to witness a glimpse of our performances and styles.
      </p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="my-masonry-grid_item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;

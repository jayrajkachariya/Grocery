import React from 'react';

const ImageViewer = ({img, alt, setActiveIndex, activeImageIndex }) => (
  <div className='text-center'>
    {img && img.length && <img src={img[activeImageIndex]} alt={alt} className="big-image"/>}
    <div className="text-center">
      {img && img.length && img.map((IMG, i) =>
        <img
          key={i}
          src={IMG}
          alt={alt}
          className={`small-image ${activeImageIndex === i && 'active-small-image'}`}
          onClick={() => setActiveIndex(i)}
        />)}
    </div>
  </div>
);

export default ImageViewer;

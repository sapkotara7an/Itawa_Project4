import React from 'react';

function Gallery() {
  const imageList = [
    { id: 1, src: require('../src/img/small-gallery-1.jpg') },
    { id: 2, src: require('../src/img/small-gallery-2.jpg') },
    { id: 3, src: require('../src/img/small-gallery-3.jpg') },
    { id: 4, src: require('../src/img/small-gallery-4.jpg') },
    { id: 5, src: require('../src/img/small-gallery-5.jpg') },
    { id: 6, src: require('../src/img/small-gallery-6.jpg') },
    { id: 7, src: require('../src/img/small-gallery-7.jpg') },
  ];

  return (
    <div className='gallery text-center'>
      <h1 className='pt-3'>Photo Gallery</h1>
      <p className='pb-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='row'>
        {imageList.map((image) => (
          <div className='col-lg-3' key={image.id}>
            <div className='gallery_img'>
              <img src={image.src} alt={`Image ${image.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

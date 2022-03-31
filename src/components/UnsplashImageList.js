import React from 'react';
import './UnsplashImageList.css';
import ImageCard from './UnsplashImageCard';

const ImageList = (props) => {

  const images =  props.images.map((image) => {
    return (
      <ImageCard key={image.id} id={image.id} image={image}/>
    )
  });


  return (
    <div className="image-list">
      {images}
    </div>
  );
}

export default ImageList;

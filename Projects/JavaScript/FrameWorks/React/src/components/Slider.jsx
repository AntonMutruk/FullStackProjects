import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Slider.css';

const Slider = () => {
  const sliderImages = [
    {
      src: `${process.env.PUBLIC_URL}/productsImage/product1.jpg`,
      alt: 'Product 1',
      legend: 'Iphone'
    },
    {
      src: `${process.env.PUBLIC_URL}/productsImage/product2.jpg`,
      alt: 'Product 2',
      legend: 'Apple Watch'
    },
    {
      src: `${process.env.PUBLIC_URL}/productsImage/product3.jpg`,
      alt: 'Product 3',
      legend: 'Mac Book Pro'
    }
    // Add more slider images as needed
  ];

  return (
    <div className="slider">
      <Carousel>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

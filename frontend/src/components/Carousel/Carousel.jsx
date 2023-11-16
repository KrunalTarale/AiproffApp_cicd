import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'

import image1 from '../assets/Article1/applied-ai-654b1bfba8edd.webp';
import image2 from '../assets/Nlp_img/nlp-654b1bf74208d.webp';
import image3 from '../assets/ComputerVision/cv-654b1bf98f9e1.webp';
import image4 from '../assets/forcastingAi/forecasting-using-ai-654b1bf97eb0c.webp';
import image5 from '../assets/rodbust_ai/reliable-and-robust-ai-654b1bf75ef8b.webp';

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const autoAdvance = () => {
    nextSlide();
  };

  useEffect(() => {
    const intervalId = setInterval(autoAdvance, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper relative text-2xl">
      <div className="carousel-slider" style={sliderStyle}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide ">
            <Link to={'/contact'} className='links'>
            <img src={image} alt="Carousel slide" className="carousel-image " />
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 btn_div" onClick={prevSlide}>
        <button
          
          className="p-4 text-black bg-white rounded-full border-2 border-blue-600 hover:text-white hover:bg-blue-600 slider_btns"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2
        <button btn_div" onClick={nextSlide}
      >
        <button
         
          className="p-4 text-black bg-white rounded-full border-2 border-blue-600 hover:text-white hover:bg-blue-600 slider_btns"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

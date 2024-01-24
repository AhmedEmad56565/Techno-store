/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';
import { leftArrow, rightArrow } from '../assets/svg';
import { motion } from 'framer-motion';

export default function Slider() {
  const slides = [
    {
      url: '/slider-img/slider-1.png',
    },
    {
      url: '/slider-img/slider-2.png',
    },
    {
      url: '/slider-img/slider-3.png',
    },

    {
      url: '/slider-img/slider-4.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);

    return () => clearTimeout(timer);
  }, [nextSlide]);

  return (
    <div className='slider'>
      <div className='slider__wrapper'>
        <div className='container slider__container'>
          <h1 className='slider__header'>Techno Store</h1>
          <p className='slider__text'>
            Get the best of Shopping and Entertainment with us. Enjoy low prices
            and great deals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className='slider__btn'
          >
            Buy Now
          </motion.button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='slider__img'
      ></div>
      {/* Left Arrow */}
      <div className='slider__arrow slider__arrow-left'>
        <img src={leftArrow} alt='prev' onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='slider__arrow slider__arrow-right'>
        <img src={rightArrow} alt='next' onClick={nextSlide} />
      </div>
    </div>
  );
}

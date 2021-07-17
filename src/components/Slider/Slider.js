import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './slider.scss';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';

import { Button } from '../Button';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export default function Slider({ slides }) {
  return (
    <>
      <Swiper
        style={{ '--swiper-pagination-color': '#fff' }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2,
        }}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper">
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-back" key={index}>
            <div className="slide-container">
              <img src={slide.image} alt={slide.alt} />
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
                <Button to={slide.path} primary="true">
                  {slide.label}
                  <Arrow />
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

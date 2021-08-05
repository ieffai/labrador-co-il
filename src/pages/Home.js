import React from 'react';
import { Hero, InfoSection } from '../components';
import Features from '../components/Features';
import Listings from '../components/Listings';
import Slider from '../components/Slider/Slider';
import { infoData, infoDataTwo, slides } from '../data';
import { sliderData } from '../data/SliderData';

const Home = () => {
  return (
    <>
      <Slider slides={slides} />
      {/* <Hero slides={slides} /> */}
      <InfoSection {...infoData} />
      <Listings />
      <Features />
      <InfoSection {...infoDataTwo} />
    </>
  );
};

export default Home;

import React from 'react';
import { Hero, InfoSection } from '../components';
import Features from '../components/Features';
import Listings from '../components/Listings';
import { infoData, infoDataTwo, slides } from '../data';

const Home = () => {
  return (
    <>
      <Hero slides={slides} />
      <InfoSection {...infoData} />
      <Listings />
      <Features />
      <InfoSection {...infoDataTwo} />
    </>
  );
};

export default Home;

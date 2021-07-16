import React, { useState } from 'react';
import { Hero, InfoSection, Navbar } from './components';
import Dropdown from './components/Dropdown';
import { infoData, slides } from './data';
import GlobalStyle from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={slides} />
      <InfoSection {...infoData} />
    </>
  );
}

export default App;

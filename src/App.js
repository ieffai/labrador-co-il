import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Navbar, AppRouter } from './components';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, useLocation } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

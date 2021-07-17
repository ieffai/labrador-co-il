import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Switch, Route } from 'react-router';
import { Navbar } from './components';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Slider from './components/Slider/Slider';
import GlobalStyle from './globalStyles';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Handlers from './pages/Handlers';
import Puppies from './pages/Puppies';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

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
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/puppies" component={Puppies} />
        <Route path="/handlers" component={Handlers} />
      </Switch>
      {/* <Slider slides={slides} /> */}

      <Footer />
    </>
  );
}

export default App;

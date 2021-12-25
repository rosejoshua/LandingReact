import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import WorkPage from '../components/WorkSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import About from '../components/About'
import {
  workObjOne,
} from '../components/WorkSection/data';
import Services from '../components/Projects';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />
      <WorkPage {...workObjOne}>
      </WorkPage>
      <About />
      <Footer />
    </>
  );
};

export default Home;

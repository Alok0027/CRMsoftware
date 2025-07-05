import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Logo from '../components/Logo';
import Benefit from '../components/Benefit';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit />
      <Logo />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Money from '../components/Money';
import Vision from '../components/Vision';
import Advisory from '../components/Advisory';

const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner heading="Vision" />
      <Money />
      <Vision />
      {/* <Advisory /> */}
    </div>
  );
}

export default About
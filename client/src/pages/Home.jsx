import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import AboutComponent from '../components/AboutComponent';

const Home = () => {
  return (
      <div> 
        <Announcement/>
        <Navbar/>
          <Slider/>
          <AboutComponent/>
          <Gallery/>
          <Newsletter/> 
          <Footer/>
      </div>
      
    )
}

export default Home;

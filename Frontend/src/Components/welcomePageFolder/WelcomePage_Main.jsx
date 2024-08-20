import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import WelcomePage_HeroSection from './WelcomePage_HeroSection';
import WelcomePage_RegisterSection from './WelcomePage_RegisterSection';
import WelcomePage_TipsSection from './WelcomePage_TipsSection';
import WelcomePageFooter from './WelcomePage_Footer';
import Slide from './Slide';

function WelcomePage_Main() {
  return (
    <>
      
      <WelcomePage_HeroSection/>
      <Slide/>
      <WelcomePage_RegisterSection/>
      <WelcomePage_TipsSection/>
      <WelcomePageFooter/>
      
    </>
  );
}

export default WelcomePage_Main;
  
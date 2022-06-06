import React from 'react';
import Common from './Common';
import web from '../src/Images/header1.jpg';

function About() {
  return (
    <>
      <Common name="Welcome to About page" imgsrc={web} visit="/contact" btnname="Contact Us" />
    </>
  )
}

export default About;
import React from 'react';
import Common from './Common';
import web from '../src/Images/header.jpg';

function Home() {
  return (
    <>
    <Common name="Grow your business with " imgsrc={web} visit="/service" btnname="Get Started" />
    </>
  )
}

export default Home;
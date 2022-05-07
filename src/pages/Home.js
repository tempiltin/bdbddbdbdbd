import React from 'react';
import Header from '../Components/header/Header';
import ServicesTem from '../Components/services/ServicesTem';
import MyResum from '../Components/MyResum/MyResum';
import Foter from '../Components/Foter/Foter';
// import Testimonials from '../Components/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
    <Header />
    <ServicesTem />
    <MyResum />
    <Foter />
    
    {/* <Testimonials /> */}
 
    </>
  )
}

export default Home
import React from 'react';
import Slider from '../../components/organisms/Slider'
import Headers from '../../components/organisms/Header';
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';

const Home = () => {

  

  return (
    <>
      <Headers/>
      <Slider/>
      <FilterBar/>
      <PlayGallery/>
    </>
  )
}

export default Home
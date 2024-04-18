import React from 'react';
import Slider from '../../components/organisms/Slider'
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const plays =  useLoaderData();

  //useState
  const handleFilterPlays = (filterPlays) =>{

  }

  return (
    <>
    
      <Slider />
      <FilterBar plays={plays} />
      <PlayGallery plays={plays} />
      
    </>
  );
}

export default Home
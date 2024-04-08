import React from 'react';
import Slider from '../../components/organisms/Slider'
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom'
import ButtonIconFilter from '../../components/molecules/ButtonIcon';

const Home = () => {

  const plays =  useLoaderData();


  return (
    <>
      
      <Slider/>
      
      <FilterBar/>
      <PlayGallery plays={plays} />

    </>
  )
}

export default Home
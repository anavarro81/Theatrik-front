import React from 'react';
import Slider from '../../components/organisms/Slider'
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom'
import {usePlays} from '../../Hooks/usePlays';

const Home = () => {

  // const plays =  useLoaderData();
  
  const {plays, getPlays} = usePlays();
  console.log('plays > ', plays );
  


  return (
    <>
      
      <Slider/>
      <FilterBar/>
      <PlayGallery plays={plays} /> 

    </>
  )
}

export default Home
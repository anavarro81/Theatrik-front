import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import PlayGallery from '../../components/organisms/PlayGallery';
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
 
import { usePlays } from '../../Providers/PlaysProvider';

const Home = () => {

  
  const {plays, sliderPlays, getData} = usePlays();   

  useEffect(() => {
    getData()
    
  }, []);

  return (
    <>
      
      <HomeSlider data={sliderPlays}/>
      <FilterBar/>
      <PlayGallery plays={plays}/>

    </>
  )
};

export default Home;
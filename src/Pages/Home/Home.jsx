import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import PlayGallery from '../../components/organisms/PlayGallery';
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
 
import { usePlays } from '../../Providers/PlaysProvider';

const Home = () => {

  
  const {plays, sliderPlays, getData, filteredPlays} = usePlays();

  useEffect(() => {
    getData()
    
  }, []);


  const playsGallery =  filteredPlays.length > 0 ? filteredPlays : plays

  

  return (
    <>
      
      <HomeSlider data={sliderPlays}/>
      <FilterBar plays={plays}/>
      <PlayGallery plays={playsGallery}/>

    </>
  )
};

export default Home;
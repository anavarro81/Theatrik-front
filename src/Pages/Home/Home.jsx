import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import PlayGallery from '../../components/organisms/PlayGallery';
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
//! 
import { usePlays } from '../../Providers/PlaysProvider';

const Home = () => {

  // const plays =  useLoaderData();

  const [plays, getPlays, filteredPlays, updateSlider, sliderPlays, searchPlay, multipleSearch, getData] = usePlays();

  useEffect(() => {
    getData()
    
  }, []);


  const playsGallery =  filteredPlays.length > 0 ? filteredPlays : plays

  return (
    <>
      
      <HomeSlider data={sliderPlays}/>
      <FilterBar/>
      <PlayGallery plays={playsGallery}/>

    </>
  )
};

export default Home;
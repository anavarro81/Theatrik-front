import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom';
import { usePlays } from "../../Providers/PlaysProvider";
import { useEffect } from 'react';

const Home = () => {

  // const plays_origin =  useLoaderData();

  const [plays, getPlays, searchPlay, filteredPlays] = usePlays();

  useEffect(() => {
    getPlays() 
    
  }, [])
  

  const sliderPlays = plays.slice(0,5)

  

  console.log('filteredPlays > ', filteredPlays);

  const showPlays = filteredPlays.length > 0 ? filteredPlays : plays

  return (
    <>
      
      <HomeSlider data={sliderPlays}/>
      <FilterBar/>
      <PlayGallery plays={showPlays}/>

    </>
  )
};

export default Home;
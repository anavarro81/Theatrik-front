import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import PlayGallery from '../../components/organisms/PlayGallery';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const plays =  useLoaderData();
  
  const [sliderPlays, setSliderPlays] = useState([]);
  const currentDate = (new Date("2023-11-05")); // Modificar por (new Date()) para obtener la fecha actual

  const updateSlider = () => {
    
    const filteredPlays = plays?.filter(play => new Date(play.date) >= currentDate).slice(0,5);

    setSliderPlays(filteredPlays);

  };

  useEffect(() => {
    updateSlider(); 
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
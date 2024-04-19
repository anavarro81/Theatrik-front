import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

  const plays =  useLoaderData();

  const sliderPlays = plays.slice(0,5)

  return (
    <>
      
      <HomeSlider data={sliderPlays}/>
      <FilterBar/>
      <PlayGallery plays={plays}/>

    </>
  )
};

export default Home;
import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const plays =  useLoaderData();

<<<<<<< HEAD:src/Pages/Home/Home.jsx
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
=======
  const sliderPlays = plays.slice(0,5)

  return (
    <>
      
      <HomeSlider data={sliderPlays}/>
      <FilterBar/>
      <PlayGallery plays={plays}/>

    </>
  )
};
>>>>>>> 041175e6dd4fbbf41c12a9adf72de5b72fe3a7a7:src/pages/Home/Home.jsx

export default Home;
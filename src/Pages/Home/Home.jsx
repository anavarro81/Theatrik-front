import HomeSlider from '../../components/organisms/Slider';
import FilterBar from '../../components/organisms/FilterBar';
import PlayGallery from '../../components/organisms/PlayGallery';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { usePlays } from '../../Providers/PlaysProvider';

const Home = () => {
  

  // const plays_origin =  useLoaderData();

  const [plays, getPlays, searchPlay, filteredPlays] =  usePlays();

  useEffect(() =>{
    getPlays();

  }, [])

  // const sliderPlays = plays.slice(0, 5);

  // console.log('filteredPlays > ', filteredPlays);

  const showPlays = filteredPlays.length > 0 ? filteredPlays : plays

  // const plays =  useLoaderData();
  
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
      <HomeSlider data={sliderPlays} />
      <FilterBar />
      {/* <PlayGallery plays={plays} /> */}
      <PlayGallery plays={showPlays} />

    </>
  );
};

export default Home;



// import HomeSlider from '../../components/organisms/Slider';
// import FilterBar from '../../components/organisms/FilterBar';
// import PlayGallery from '../../components/organisms/PlayGallery';
// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Home = () => {

//   const plays =  useLoaderData();

//   const [sliderPlays, setSliderPlays] = useState([]);
//   const currentDate = (new Date("2023-11-05")); // Modificar por (new Date()) para obtener la fecha actual

//   const updateSlider = () => {

//     const filteredPlays = plays?.filter(play => new Date(play.date) >= currentDate).slice(0,5);

//     setSliderPlays(filteredPlays);

//   };

//   useEffect(() => {
//     updateSlider(); 
//   }, []);

//   return (
//     <>

//       <HomeSlider data={sliderPlays}/>
//       <FilterBar/>
//       <PlayGallery plays={plays}/>

//     </>
//   )
// };

// export default Home;
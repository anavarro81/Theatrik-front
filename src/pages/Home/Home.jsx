import React from 'react';
import Slider from '../../components/organisms/Slider'
import FilterBar from '../../components/organisms/FilterBar';
import  PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom'
import usePlays from '../../Hooks/usePlays';
import {useState, useEffect} from "react"


const Home = () => {

  //  const plays2 =  useLoaderData();

  

  const [plays,,filteredplays] = usePlays();

  console.log('filteredplays ', filteredplays);

  return (
    <>

      
      
      <Slider/>
      <FilterBar/>
      <PlayGallery plays={plays} /> 

    </>
  )
}

export default Home
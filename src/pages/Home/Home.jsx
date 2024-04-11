import React from 'react';
import Slider from '../../components/organisms/Slider'
import FilterBar from '../../components/organisms/FilterBar';
import PlayGallery from '../../components/organisms/PlayGallery';
import { useLoaderData } from 'react-router-dom'
// import usePlays from '../../Hooks/usePlays';
import { useState, useEffect } from "react"
import { usePlays } from '../../Providers/PlaysProvider'

const Home = () => {

  //  const plays2 =  useLoaderData();

  const [plays, getPlays, filteredPlays, searchPlay] = usePlays();

  useEffect(() => {
    getPlays()
  }, [])



  let playsResult = filteredPlays.length > 0 ? filteredPlays : plays;


  return (
    <>



      <Slider />
      <FilterBar />
      <PlayGallery plays={playsResult} />

    </>
  )
}

export default Home
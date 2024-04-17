import React from 'react'
import { useLoaderData } from 'react-router-dom'
import InfoCompanyCard from '../../components/molecules/InfoCompanyCard';

const Info = () => {
  const play =  useLoaderData();
  
  console.log(play.company);
  
  
  return (
    <>
    <InfoCompanyCard company={play.company[0]}/>
    </>


  )
}

export default Info
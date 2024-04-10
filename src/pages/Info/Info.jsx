import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Info = () => {
  const play =  useLoaderData();
  console.log(play);
  
  
  return (
    <>
    <img src={play.cartel} alt="" />
    <p>{play.company_name} </p>
    <p>{play.place} </p>

    </>


  )
}

export default Info
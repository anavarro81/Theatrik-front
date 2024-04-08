import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Info = () => {
  const play =  useLoaderData();
  console.log(play);
  
  
  return (
    <div>Info</div>
  )
}

export default Info
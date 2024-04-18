import React from 'react'
import { useLoaderData } from 'react-router-dom'


const BookingPage = () => {

  const play =  useLoaderData();
  console.log(play);
  

  return (
    <div>BookingPage</div>
  )
}

export default BookingPage
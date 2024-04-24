import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BookingForm from '../../components/organisms/BookingForm';
import Image from '../../components/atoms/Image/Image';
import Title from '../../components/atoms/Title/Title';
import classNames from 'classnames';

const BookingPage = () => {

  const play =  useLoaderData();
  console.log(play);
  

  return (
    <> 
    
 <h1> Reservar </h1>

  <div className='flex flex-col-reverse md:flex-row md:justify-around  m-2 '>

    <div className='flex w-full space-y-4 md:flex flex-col md:w-[60%]'> 
      <Title type={"H1"} text={"Reservar"} />
      <BookingForm/> 
     </div> 

    <div className='w-full md:w-[30%]'>
    <Image url={play.cartel} />
    </div>

  </div>

  </>
  )
}

export default BookingPage


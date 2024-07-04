import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BookingForm from '../../components/organisms/BookingForm';
import Image from '../../components/atoms/Image/Image';
import Title from '../../components/atoms/Title/Title';
import classNames from 'classnames';

const BookingPage = () => {

  const play = useLoaderData();
  console.log(play);


  return (
    <>
    <div className=' flex flex-col flex-col-reverse justify-center lg:flex-row gap-20 py-10'>
      
      <div className='lg:w-1/2'> 
        <BookingForm play={play} />      
      </div>

      <div className=''>
      <Image url={play.cartel} variant={'img-bookingPage'}/>
      </div>
    
    </div>
    </>
  )
}

export default BookingPage


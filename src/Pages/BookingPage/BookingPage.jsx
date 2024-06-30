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
    <div className='flex flex-row justify-center w-full'>

      {/*  Version actual */}
      {/* <div className=' flex flex-col-reverse  pt-[50px] md:pt-[169px] md:flex-row md:justify-around  md:h-[691px] m-2 bg-red-100'> */}



      <div className=' flex flex-col-reverse lg:flex lg:flex-row lg:justify-center gap-[50px] max-w-7xl' >

        <div className='flex w-full h-full space-y-4 md:flex flex-col md:w-[60%]'>
          <Title type={"H1"} text={"Reservar"} />
          <BookingForm play={play} />
        </div>

        <div className='rounded-lg w-full md:w-[564px] md:h-[693px]  '>
          <Image url={play.cartel} variant={"img-mobile-bk-pg"} />
        </div>

      </div>

    </div>
  )
}

export default BookingPage


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
    
    

    // <div className='flex justify-center ' >
    //       <div className='flex flex-col mx-6' >
    //       <BookingForm/>
    //       </div>
    //       <div className=''>
    //         <Image url={play.cartel}/>
    //       </div>
    //   </div>
      

    // <div id='divider' className='flex justify-around w-full h-lvh '>
    //   <div id='left-side' className='flex-1  h-full bg-green-100'>
        
    //     <div className='flex flex-col mx-6'>
    //     <Title type={"H1"} text={"Reservar "} />
    //     <BookingForm/>        
    //     </div>
    //   </div>
    //   <div id='right-side' className='flex-1 h-full bg-blue-300'>
    //   <Image url={play.cartel} />
    //   </div>
    // </div>

  <div className='flex flex-col-reverse md:flex-row md:justify-around  m-2 '>

    <div className='flex w-full space-y-4 md:flex flex-col md:w-[60%]'> 
      <Title type={"H1"} text={"Reservar "} />
      <BookingForm/> 
     </div> 

    <div className='w-full bg-red-100 md:w-[30%]'>
    <Image url={play.cartel} />
    </div>

  </div>


  )
}

export default BookingPage


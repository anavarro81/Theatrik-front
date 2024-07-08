import React from 'react'
import Icon from "../atoms/Icon/Icon"
import { Link } from "react-router-dom";
import { formatDate } from '../../../utils/formatDate'

const PlayInfoCard = ({play, onSubmit}) => {

  // Formatea fecha a formato: viernes, 3 de noviembre"
  const formatedDate = formatDate(play.date);
  console.log(formatedDate);

  return (

<div className=" w-[95%] lg:w-full "> 
        
        <div id='placeInfo' className='mt-4 border p-4 rounded-lg shadow-lg '>
              
              {/* Place */ }
              <div id='place' className='flex items-center space-x-2 '>
                <Icon type={"Map"}/>
                <p> {play.place} </p>
              </div>

              {/* Date */}
              <div className='flex items-center space-x-2 my-2 '>
                <Icon type={"Calendar_Yellow"}/>
                <p> {formatedDate} </p>
              </div>

              {/* Time and booking button */ }
              <div className='flex flex-col lg:flex-row lg:justify-between '>
                  
                  <div className='flex items-center space-x-2 my-2 '>
                    <Icon type={"Clock"}/>
                    <p> {play.time} </p>
                  </div>

                  <Link to={`/booking/${play._id}`}> 
                  <button 
                  type='submit'
                  className='bg-orangeDesign  text-white font-bold py-2 px-4 rounded-full inline-block h-[42px] w-full'
                  onClick={onSubmit}
                  > 
                  Reservar 
                  
                  </button>
                  </Link>
              </div>            
        </div>       
</div>  

  )
}

export default PlayInfoCard

{/* <div className='w-full items-center flex flex-col lg:justify-between space-x-2 '>
                
<div id='icon-info-clock' className='flex items-center space-x-2 my-2 '>
    <Icon type={"Clock"}/>
    <p> {play.time} </p>
</div>

  <div className='mt-2  w-full lg:flex lg:justify-end'>
    <Link to={`/booking/${play._id}`}> 
      <button className='bg-orangeDesign  text-white font-bold py-2 px-4 rounded-full inline-block h-[42px] w-full'> Reservar </button>
    </Link>
  </div>      

</div> */}
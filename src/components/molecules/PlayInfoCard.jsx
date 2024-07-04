import React from 'react'
import Icon from "../atoms/Icon/Icon"
import { Link } from "react-router-dom";

const PlayInfoCard = ({play}) => {
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
                <p> {play.date.substring(0, 10)} </p>
              </div>

              {/* Time and booking button */ }
              <div className='w-full items-center lg:flex lg:justify-between space-x-2 '>
                <Icon type={"Clock"}/>
                <p> {play.time} </p>          
                <div className='mt-2  w-full lg:flex lg:justify-end'>
                <Link to={`/booking/${play._id}`}> 
                  <button className='bg-orangeDesign  text-white font-bold py-2 px-4 rounded-full inline-block h-[42px] w-full'> Reservar </button>
                </Link>
              </div>      
          </div>

        </div> 
      
      </div>  

  )
}

export default PlayInfoCard


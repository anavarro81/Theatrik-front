import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import GlobeIcon from "../../components/atoms/Icon/globe.svg";
import MailIcon from "../../components/atoms/Icon/mail.svg";
import SmartphoneIcon from "../../components/atoms/Icon/smartphone.svg";
import MapIcon from "../../components/atoms/Icon/map.svg";
import CalendarDateIcon from "../../components/atoms/Icon/calendar-date.svg";
import ClockIcon from "../../components/atoms/Icon/clock.svg";
import Icon from "../../components/atoms/Icon/Icon"
// import "./styles.css";

const InfoPage = () => {
  
  const play = useLoaderData();

  return (
    <>

<div className='flex flex-col lg:flex-row justify-center items-center lg:items-start p-5'>
      <div className='lg:w-1/2 p-4 order-2 lg:order-1'>
{/* Content Sections */}
        <div className='space-y-4'>         
          <section>
            <h2 className='font-bold text-xl'> {play.title} </h2>
            <p> {play.synopsis} </p>
          </section>

          <section>
            <h2 className='font-bold text-xl'> Interpretes </h2>
            <p> {play.actors} </p>
          </section>

          <section>
            <h2 className='font-bold text-xl'> Director </h2>
            <p>{play.director} </p>
          </section>        
          
        </div>

        <h3 className='text-2xl font-semibold pt-8 pb-4'> Mas sobre {play.company_name}</h3>
        <div className='flex space-x-4 items-center'>
          {/* Incluir iconos */}
          <a href='mailto:email@example.com' className=''> <Icon type="Glove"></Icon> </a>
          <a href='mailto:email@example.com' className=''> <Icon type="Mail"></Icon> </a>
          <a href='tel:+1234567890' className=''> <Icon type="Smartphone"></Icon></a>
        </div>
      </div>
      <div className='lg:p-4 order-1 lg:order-2'>
        
        <img src={play.cartel} alt='Placeholder' className='max-w-full h-auto object-cover lg:max-w-[465px]' />
        
        {/* Place and hour info*/}
        <div className="hidden lg:block order-3 lg:w-full  "> 
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
              <div className='w-full items-center lg:flex lg:justify-between space-x-2'>
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
              
      </div>
      
      {/* Place and hour info*/}
      <div className="w-full lg:hidden order-3 "> 
        <div id='placeInfo' className='mt-4 border p-4 rounded-lg shadow-lg '>
              
              {/* Place */ }
              <div id='place' className='flex items-center space-x-2 '>
                <Icon type={"Map"}/>
                <p> {play.place} </p>
              </div>

              {/* Date */}
              <div className='flex items-center space-x-2 my-2 '>
                <Icon type="Calendar_Yellow"/> 
                <p> {play.date.substring(0, 10)} </p>
              </div>

              {/* Time and booking button */ }
              <div className='w-full items-center lg:flex lg:justify-between space-x-2 '>
                <div className="flex items-center space-x-2"> 
                  <Icon type="Clock"/>                
                  <p> {play.time} </p>          
                </div>
                <div className='mt-2  w-full lg:flex lg:justify-end'>
                
                <Link to={`/booking/${play._id}`}> 
                  <button className='bg-orangeDesign  text-white font-bold py-2 px-4 rounded-full inline-block h-[42px] w-full'> Reservar </button>
                </Link>
              </div>      
          </div>

        </div> 
      
      </div>   
    </div>

  

    </>
  )
}
export default InfoPage;


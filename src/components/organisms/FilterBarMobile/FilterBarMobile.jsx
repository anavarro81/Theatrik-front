
import React, { useState} from "react";
import Icon from '../../atoms/Icon/Icon'
import "./styles.css"
import DatePicker, { registerLocale } from "react-datepicker";

import es from "date-fns/locale/es";
registerLocale("es", es);



import "react-datepicker/dist/react-datepicker.css";
import { usePlays } from "../../../Providers/PlaysProvider"

// export default function FilterBar({plays}) {

export default function FilterBarMobile({plays}) {

  const [startDate, setStartDate] = useState(new Date("2024-11-01"));
  const [endDate, setEndDate] = useState(null);
  const { searchPlayGenre, getPlays, searchPlayAsociation, searchDate} = usePlays();

  
  
  const handleCompany = (event) => {
    const searchParams = {
      searchTerm: event.target.name,
      searchFor:  event.target.value
    }   
    searchPlayAsociation(searchParams);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    searchDate(dates);
  };


  const handleGenre = (event) => {
    console.log("searchTerm: ", event.target.value);
    console.log("searchFor: ", event.target.name);
    const searchParams = {
      searchTerm: event.target.value,
      searchFor: event.target.name
    }
    searchPlayGenre(searchParams);
  }




  
  
  return (

    <> 
    
    <div className='filter-bar-container'>   

      <button> Filtros </button>

    
      <div className='filter-container' id='company-filter'>
      <label htmlFor="company_name" className="block text-gray-700 text-sm font-bold mb-2"> Asociación </label>
      <select
              name="company_name"
              id=""
              className="py-2 px-3"
              onClick={handleCompany}
            >
              {/* Obtiene los nombres de las asociaciones de la base de datos. */}
              <option key={0} value=""> Asociacion </option>

              {plays.map((play) => (
                <option key={play._id} value={play.company_name}> {play.company_name} </option>
              ))
              }

      </select>
      </div>

      <div className="filter-container" id='date-filter' className="text-gray-700 text-sm font-bold mb-2">
        <label htmlFor="calendar "> Fechas </label>        
        <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              locale="es"
              selectsRange
              showIcon
              toggleCalendarOnIconClick
              className="py-2 px-3"
        />
      </div> 
      <div className="filter-container">
      <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2"> Genero </label>
        <select name="genre" 
        onClick={handleGenre} 
        className="py-2 px-3">
              <option value=""> Género </option>
              <option value="comedia"> Comedia </option>
              <option value="drama"> Drama </option>
              <option value="infantil"> Infantil </option>
            </select>  

      </div>

      

      
      
  
      

    <div className='btn-container'>
      <button className=" px-4 py-2 rounded bg-orangeDesign"> Aplicar Filtros </button>
      <a href="" className='text-red-500 cursor-pointer'> Borrar Filtros</a>
    </div>

    </div>

    
    
    
    </>
  )
}




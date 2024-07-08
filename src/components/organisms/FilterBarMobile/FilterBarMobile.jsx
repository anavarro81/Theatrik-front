
import React, { useRef, useState} from "react";
import Icon from '../../atoms/Icon/Icon'
import "./styles.css"
import DatePicker, { registerLocale } from "react-datepicker";

import es from "date-fns/locale/es";


registerLocale("es", es);





import "react-datepicker/dist/react-datepicker.css";
import { usePlays } from "../../../Providers/PlaysProvider"

// export default function FilterBar({plays}) {

export default function FilterBarMobile({plays}) {

  const ExhibitonStart = new Date ('2023-11-01')
  const ExhibitonEnds = new Date ('2023-11-30')
  
  
  
  

  // const [startDate, setStartDate] = useState(new Date("2024-11-01"));
  const [startDate, setStartDate] = useState(ExhibitonStart);
  const [endDate, setEndDate] = useState(ExhibitonEnds);

  const { searchPlayGenre, getPlays, searchPlayAsociation, searchDate} = usePlays();
  const [showFilters, setShowFilters] = useState(false)  
  const toggleBtn = useRef();
  
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

  

  const toggleFilters = () => {
    setShowFilters(!showFilters)
    toggleBtn.current.classList.toggle("active")
  }

  const handleFilters = () => {

  }

  
  
  return (

    <> 

    
    
    <div className='filter-bar-container'>   

      <button className='filter-toggle-btn' ref={toggleBtn} onClick={() => toggleFilters()}> Filtros </button>

       
      
      {showFilters && 
      <>
      
      <p> Seleccion una de las opciones para filtrar las obras: </p>  

      <div className='filter-container' id='company-filter'>
      <label htmlFor="company_name" className="block text-gray-700 text-sm font-bold mb-2"> Firtrar por Asociación </label>
      
      {/* Filter by Company */ }

      <select
              name="company_name"
              id=""
              className="py-2 px-3"
              onClick={handleCompany}
            >
              {/* Obtiene los nombres de las asociaciones de la base de datos. */}
              

              <option key={0} value={""}>- Cualquiera</option>

              {plays.map((play) => (
                <option key={play._id} value={play.company_name}> {play.company_name} </option>
              ))
              }

      </select>
      </div>

      {/* Filter by Date */ }
      <p className="text-gray-700 text-sm font-bold"> Filtrar por fechas desde y hasta </p>
      <div className="filter-container-dates text-gray-700 text-sm font-bold mb-2" id='date-filter'>
      
        {/* <div className="filter-container flex justify-center bg-red-500">  */}
          
          {/* <label htmlFor="calendar"> Desde </label>        
          
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            isClearable
            locale="es"
            placeholderText="dd/mm/aaaa"
            dateFormat="dd/MM/yyyy"
            className="py-2 px-3"
            
          /> */}

<DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      showIcon
      toggleCalendarOnIconClick
      locale='es'
      dateFormat="dd/MM/yyyy"
      
    />
       {/* </div> */}

       {/* <div className="filter-container">
          <label htmlFor="calendar"> Hasta </label>              
          <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              isClearable
              locale="es"
              placeholderText="dd/mm/aaaa"
              dateFormat="dd/MM/yyyy"
              className="py-2 px-3"
            />   
        </div>    */}
      
      </div>


      {/* Filter by Genre */ }
      <div className="filter-container">
      <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2"> Filtrar por  Genero </label>
        <select name="genre" 
        onClick={handleGenre} 
        className="py-2 px-3">
              <option value="">- Cualquiera</option>
              <option value="comedia"> Comedia </option>
              <option value="drama"> Drama </option>
              <option value="infantil"> Infantil </option>
            </select>  

      </div>       
      
      
    </>   
    }
    
    </div>
 
            
    
    
    </>
  )
}




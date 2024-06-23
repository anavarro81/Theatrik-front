import React, { useState, useEffect } from "react";
import Text from "../atoms/Text/Text";
import { usePlays } from "../../Providers/PlaysProvider";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarFilter from '../molecules/CalendarFilter'

export default function FilterBar({plays}) {

  const [startDate, setStartDate] = useState(new Date("2023-11-01"));
  const [endDate, setEndDate] = useState(null);

  const { searchPlayGenre, getPlays, searchPlayAsociation, searchDate} = usePlays();


  const  handleGenre = (event) => {
    
    console.log("searchTerm: ", event.target.value);
    console.log("searchFor: ", event.target.name);

    const searchParams = {
      searchTerm: event.target.value,
      searchFor:  event.target.name
    }

    searchPlayGenre(searchParams);
  }


  const handleCompany = (event) => {

    const searchParams = {
      searchTerm: event.target.name,
      searchFor:  event.target.value
    }

    console.log('searchParams > ', searchParams);

    searchPlayAsociation(searchParams);
  };

  const onChange = (dates) => {

    console.log('dates ', dates);
    


    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    searchDate(dates);
    
  };




  return (
    <>
      <div className="flex bg-gray-300 justify-center space-x-10 items-center ">

        
          <Text text="Borrar filtros"  variant={"deleteFilterLink"} id={"deleteFilterLink"}> </Text>        

{/* Filtro por asociacion */}
          <div className="select-container mt-1 mb-1 flex mr-14 relative items-center ">        
            <select 
              name="company_name"
              id="" 
              className="select-box appearance-none w-[146px] p-1 outline-none"
              onClick={handleCompany}

              

            >
              {/* Obtiene los nombres de las asociaciones de la base de datos. */}
              <option key={0} value=""> Asociacion </option> 
              
              {plays.map((play) => (
                <option key={play._id} value={play.company_name}> {play.company_name} </option>  
            ))             
            }
                      
            </select>
            <div className="icon-container flex items-center absolute right-0">
            {/* <svg width="16" height="16" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="layout-grid">
              <path id="Vector" d="M13.6665 4.375H6.1665C5.33808 4.375 4.6665 5.02792 4.6665 5.83333V13.125C4.6665 13.9304 5.33808 14.5833 6.1665 14.5833H13.6665C14.4949 14.5833 15.1665 13.9304 15.1665 13.125V5.83333C15.1665 5.02792 14.4949 4.375 13.6665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M30.1665 4.375H22.6665C21.8381 4.375 21.1665 5.02792 21.1665 5.83333V13.125C21.1665 13.9304 21.8381 14.5833 22.6665 14.5833H30.1665C30.9949 14.5833 31.6665 13.9304 31.6665 13.125V5.83333C31.6665 5.02792 30.9949 4.375 30.1665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M30.1665 20.4167H22.6665C21.8381 20.4167 21.1665 21.0696 21.1665 21.875V29.1667C21.1665 29.9721 21.8381 30.625 22.6665 30.625H30.1665C30.9949 30.625 31.6665 29.9721 31.6665 29.1667V21.875C31.6665 21.0696 30.9949 20.4167 30.1665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_4" d="M13.6665 20.4167H6.1665C5.33808 20.4167 4.6665 21.0696 4.6665 21.875V29.1667C4.6665 29.9721 5.33808 30.625 6.1665 30.625H13.6665C14.4949 30.625 15.1665 29.9721 15.1665 29.1667V21.875C15.1665 21.0696 14.4949 20.4167 13.6665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg> */}
            </div>          
          </div>

{/* Filtro Calendar */}



{/*
- Mostrar el icono
- Solo dejar seleccionar fechas de noviembre de 2024
- Probar el filtrado. 
*/}

<DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      showIcon
      toggleCalendarOnIconClick
      
      
    />
      
      
      
      
      

{/* Filtro Genero */}
      <div className="select-container mt-1 mb-1 flex mr-14 relative items-center">        
            <select name="genre"  onClick={handleGenre} class="select-box appearance-none w-[146px] p-1 outline-none">        
              <option value=""> Género </option>
              <option value="comedia"> Comedia </option>
              <option value="drama"> Drama </option>
              <option value="infantil"> Infantil </option>
            </select>
            <div class="icon-container flex items-center absolute right-0">
            {/* <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="layout-grid">
              <path id="Vector" d="M13.6665 4.375H6.1665C5.33808 4.375 4.6665 5.02792 4.6665 5.83333V13.125C4.6665 13.9304 5.33808 14.5833 6.1665 14.5833H13.6665C14.4949 14.5833 15.1665 13.9304 15.1665 13.125V5.83333C15.1665 5.02792 14.4949 4.375 13.6665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M30.1665 4.375H22.6665C21.8381 4.375 21.1665 5.02792 21.1665 5.83333V13.125C21.1665 13.9304 21.8381 14.5833 22.6665 14.5833H30.1665C30.9949 14.5833 31.6665 13.9304 31.6665 13.125V5.83333C31.6665 5.02792 30.9949 4.375 30.1665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M30.1665 20.4167H22.6665C21.8381 20.4167 21.1665 21.0696 21.1665 21.875V29.1667C21.1665 29.9721 21.8381 30.625 22.6665 30.625H30.1665C30.9949 30.625 31.6665 29.9721 31.6665 29.1667V21.875C31.6665 21.0696 30.9949 20.4167 30.1665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_4" d="M13.6665 20.4167H6.1665C5.33808 20.4167 4.6665 21.0696 4.6665 21.875V29.1667C4.6665 29.9721 5.33808 30.625 6.1665 30.625H13.6665C14.4949 30.625 15.1665 29.9721 15.1665 29.1667V21.875C15.1665 21.0696 14.4949 20.4167 13.6665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg> */}
            </div>          
          </div>
        </div>

          
        {/* </div> */}
    
      

      

      
      
      
    </>
  );
}


/*1----------------------------------------------------------------
activeFilter === filterType ? null : filterType: Esta es una expresión
condicional que evalúa si el filtro activo actual (activeFilter) 
es el mismo que el filtro que se ha seleccionado (filterType). Si son iguales,
significa que se ha hecho clic en el mismo botón de filtro nuevamente, 
por lo que establece activeFilter en null, lo que significa que se ocultará el componente correspondiente. 
Si no son iguales, establece activeFilter en el nuevo filterType seleccionado,
lo que significa que se mostrará el componente correspondiente.*/


/*2----------------------------------------------------------------
En resumen, ${activeFilter ? "block" : "hidden"} se traduce a:
Si activeFilter tiene un valor diferente de null, la clase CSS "block" se aplica al elemento, lo que lo hace visible.
Si activeFilter es null, la clase CSS "hidden" se aplica al elemento, lo que lo hace invisible.*/
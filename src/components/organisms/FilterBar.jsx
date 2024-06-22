import React, { useState } from "react";
import Links from "../molecules/Links";
import Text from "../atoms/Text/Text";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";
import { usePlays } from "../../Providers/PlaysProvider";

export default function FilterBar({/*plays*/}) {

  // const [plays, getPlays, filteredPlays, updateSlider, sliderPlays, searchPlay, multipleSearch, getData] = usePlays();

  ;
  
  const handleGenre = (genre) => {
    // console.log("He recibido el genero del hijo: ", genre);

    // const filterGenre = plays.filter(play => play.genre === genre)
    // console.log(filterGenre);
    searchPlay(genre)
  };

  const handleFilterCompany = (company) => {
    console.log('Filtrar por asociación ', event.target.value);
  }

  const [activeFilter, setActiveFilter] = useState(null);

  /*1 explicación */
  const handleButtonClick = (filterType) => { 
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  return (
    <>
      <div className="flex bg-gray-300 justify-center space-x-10 items-center">

        
          <Text text="Borrar filtros"  variant={"deleteFilterLink"} id={"deleteFilterLink"}> </Text>        

          {/* <div className="bg-gray-300 w-full flex justify-around md:justify-end "> */}
          
          {/* Filtro asociacion */}
          
          {/* <div
            className="md:mr-14"
            onClick={() => handleButtonClick("Association")}
          >
            <ButtonIconFilter icon={"Company"} text={"Asociación"} />
          </div> */}

          <div class="select-container mt-1 mb-1 flex mr-14 relative items-center">        
            <select name="" id="" onChange={handleFilterCompany} class="select-box appearance-none w-[146px] p-3 rounded-lg">        
              
              <option value=""> Asociación </option>
              <option value="Tkomún"> Tkomún </option>
              <option value="Mayus atacados"> Mayus atacados </option>
              <option value="ATMA"> ATMA </option>
              <option value="Túngele"> Túngele </option>
            
            </select>
            <div class="icon-container flex items-center absolute right-0">
            <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="layout-grid">
              <path id="Vector" d="M13.6665 4.375H6.1665C5.33808 4.375 4.6665 5.02792 4.6665 5.83333V13.125C4.6665 13.9304 5.33808 14.5833 6.1665 14.5833H13.6665C14.4949 14.5833 15.1665 13.9304 15.1665 13.125V5.83333C15.1665 5.02792 14.4949 4.375 13.6665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M30.1665 4.375H22.6665C21.8381 4.375 21.1665 5.02792 21.1665 5.83333V13.125C21.1665 13.9304 21.8381 14.5833 22.6665 14.5833H30.1665C30.9949 14.5833 31.6665 13.9304 31.6665 13.125V5.83333C31.6665 5.02792 30.9949 4.375 30.1665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M30.1665 20.4167H22.6665C21.8381 20.4167 21.1665 21.0696 21.1665 21.875V29.1667C21.1665 29.9721 21.8381 30.625 22.6665 30.625H30.1665C30.9949 30.625 31.6665 29.9721 31.6665 29.1667V21.875C31.6665 21.0696 30.9949 20.4167 30.1665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_4" d="M13.6665 20.4167H6.1665C5.33808 20.4167 4.6665 21.0696 4.6665 21.875V29.1667C4.6665 29.9721 5.33808 30.625 6.1665 30.625H13.6665C14.4949 30.625 15.1665 29.9721 15.1665 29.1667V21.875C15.1665 21.0696 14.4949 20.4167 13.6665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            </div>          
          </div>

          {/* Filtro Calendar */}

          <div
            className="md:mr-14"
            onClick={() => handleButtonClick("Calendar")}
          >
            <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
          </div>

          {/* Filtro Genero */}

          {/* <div className="md:mr-20" onClick={() => handleButtonClick("Gender")}>
            <ButtonIconFilter icon={"Genre"} text={"Género"} />
          </div>
         */}

<div class="select-container mt-1 mb-1 flex mr-14 relative items-center">        
            <select name="" id="" class="select-box appearance-none w-[146px] p-3 rounded-lg">        
              <option value=""> Género </option>
              <option value="Comedia"> Comedia </option>
              <option value="Drama"> Drama </option>
              <option value="Infantil"> Infantil </option>
            </select>
            <div class="icon-container flex items-center absolute right-0">
            <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="layout-grid">
              <path id="Vector" d="M13.6665 4.375H6.1665C5.33808 4.375 4.6665 5.02792 4.6665 5.83333V13.125C4.6665 13.9304 5.33808 14.5833 6.1665 14.5833H13.6665C14.4949 14.5833 15.1665 13.9304 15.1665 13.125V5.83333C15.1665 5.02792 14.4949 4.375 13.6665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M30.1665 4.375H22.6665C21.8381 4.375 21.1665 5.02792 21.1665 5.83333V13.125C21.1665 13.9304 21.8381 14.5833 22.6665 14.5833H30.1665C30.9949 14.5833 31.6665 13.9304 31.6665 13.125V5.83333C31.6665 5.02792 30.9949 4.375 30.1665 4.375Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M30.1665 20.4167H22.6665C21.8381 20.4167 21.1665 21.0696 21.1665 21.875V29.1667C21.1665 29.9721 21.8381 30.625 22.6665 30.625H30.1665C30.9949 30.625 31.6665 29.9721 31.6665 29.1667V21.875C31.6665 21.0696 30.9949 20.4167 30.1665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_4" d="M13.6665 20.4167H6.1665C5.33808 20.4167 4.6665 21.0696 4.6665 21.875V29.1667C4.6665 29.9721 5.33808 30.625 6.1665 30.625H13.6665C14.4949 30.625 15.1665 29.9721 15.1665 29.1667V21.875C15.1665 21.0696 14.4949 20.4167 13.6665 20.4167Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
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
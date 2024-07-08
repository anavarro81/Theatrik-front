import React, { useState, useEffect } from "react";
import Text from "../atoms/Text/Text";
import { usePlays } from "../../Providers/PlaysProvider";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const FilterBarDesktop = ({plays}) => {
    
    const [startDate, setStartDate] = useState(new Date("2023-11-01"));
    const [endDate, setEndDate] = useState(null);

    const { searchPlayGenre, getPlays, searchPlayAsociation, searchDate} = usePlays();

    const  handleGenre = (event) => {   
    
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
        searchPlayAsociation(searchParams);
      };

      const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        searchDate(dates);
        
      };
    

  return (
    <>
      <div className="flex bg-gray-300 justify-center space-x-10 items-center ">

        
          <Text text="Borrar filtros"  variant={"deleteFilterLink"} id={"deleteFilterLink"}> </Text>        


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
            
            </div>          
          </div>






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
            <select name="genre"  onClick={handleGenre} className="select-box appearance-none w-[146px] p-1 outline-none">        
              <option value=""> Género </option>
              <option value="comedia"> Comedia </option>
              <option value="drama"> Drama </option>
              <option value="infantil"> Infantil </option>
            </select>
            <div className="icon-container flex items-center absolute right-0">
            </div>          
          </div>
        </div>

          
    
      

      

      
      
      
    </>
  )
}

export default FilterBarDesktop


import React, { useState, useEffect } from "react";
import { usePlays } from "../../Providers/PlaysProvider";



const GenderFilter = ({ genero }) => {


  const  handleGenre = () => {
    
    console.log("searchTerm: ", event.target.value);
    console.log("searchFor: ", event.target.name);

    const searchParams = {
      searchTerm: event.target.value,
      searchFor:  event.target.name
    }

    genero(searchParams)
  }
  
  
  return (
    
      
        <div>
          <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
            Genero
          </p>
          <div className="w-[9rem] h-[37px] mt-3">
            <select
              name="genre"
              defaultValue="orange"
              className="w-full h-full rounded"
              onChange={handleGenre}
            >
              <option value="comedia">Comedia</option>
              <option value="drama">Drama</option>
              <option value="infantil">Infantil</option>
            </select>
          </div>
        </div>
      
    
  );
};

export default GenderFilter;

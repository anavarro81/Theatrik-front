import React, { useState, useEffect } from "react";
import { usePlays } from "../../Providers/PlaysProvider";

//  recibe children como una propiedad, lo que significa que puede envolver otros componentes y renderizarlos dentro de sí mismo.
const GenderFilter = ({ children }) => {
  const [plays, getPlays, searchPlay, filteredPlays] = usePlays();
  const searchParams = { searchTerm: "", searchFor: "" };

  //  llamar a la función getPlays cuando el componente se monta por primera vez
  useEffect(() => {
    getPlays();
  }, []);

  // console.log(plays);

  const handleChange = () => {
    searchParams.searchTerm = event.target.name;
    searchParams.searchFor = event.target.value;

    searchPlay(searchParams);
  };

  return (
    <div>
      <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
        Genero
      </p>
      <div className="w-[9rem] h-[37px] mt-3">
        <select
          name="genre"
          defaultValue=""
          className="w-full h-full rounded"
          onChange={handleChange}
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

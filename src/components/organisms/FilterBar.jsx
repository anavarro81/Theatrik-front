import React, { useState } from "react";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";

export default function FilterBar({/*plays*/}) {
  
  // const handleGenre = (genre) => {
  //   console.log("He recibido el genero del hijo: ", genre);

  //   const filterGenre = plays.filter(play => play.genre === genre)
  //   console.log(filterGenre);
  // };

  const [activeFilter, setActiveFilter] = useState(null);
  // console.log("Estoy en FilterBar ActiveF: ", activeFilter);

  /*1 explicación */
  const handleButtonClick = (filterType) => { 
    setActiveFilter(activeFilter === filterType ? null : filterType);
    // console.log("filtro es: ", filterType);
  };

  return (
    <>
      <div className="flex">
        <div className="bg-gray-200 hidden md:block">
          <div className="h-full flex items-center mr-6">
            <Links />
          </div>
        </div>

        <div className="bg-gray-300 w-full flex justify-around md:justify-end ">
          <div
            className="md:mr-14"
            onClick={() => handleButtonClick("Association")}
          >
            <ButtonIconFilter icon={"Company"} text={"Asociación"} />
          </div>

          <div
            className="md:mr-14"
            onClick={() => handleButtonClick("Calendar")}
          >
            <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
          </div>

          <div className="md:mr-20" onClick={() => handleButtonClick("Gender")}>
            <ButtonIconFilter icon={"Genre"} text={"Género"} />
          </div>
        </div>
      </div>

      {/* div adicional para mostrar los filtros en movil con el condicional para que aparezca solo si se pulsa el botón*/}
      
      {/*2 explicación*/}
      <div
        className={`bg-gray-300 mt-1 pt-2 pb-2 flex ${
          activeFilter ? "block" : "hidden"
        }`}
      >
        <div className="md:mr-14">
          {activeFilter === "Association" && <AsociationFilter />}
        </div>

        <div className="md:mr-14">
          {activeFilter === "Calendar" && <CalendarFilter />}
        </div>

        <div className="md:mr-14">
          {activeFilter === "Gender" && <GenderFilter />}
        </div>
      </div>
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
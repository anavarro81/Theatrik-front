// import AsociationFilter from "../molecules/AsociationFilter";
import React from "react";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";

export default function FilterBar() {
  return (
    <div className="bg-black ">
      <div className="bg-gray-200 hidden">
        <Links />
      </div>

      {/* version movil */}
      <div className="bg-gray-300 flex">
        <ButtonIconFilter icon={"Company"} text={"Asociación"} />
        <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
        <ButtonIconFilter icon={"Genre"} text={"Genero"} />
      </div>
      <div className="bg-gray-300">
        {/* <ButtonIconFilter icon={"Calendar"} text={"Calendario"} /> */}
      </div>
      <div className="bg-gray-300">
        {/* <ButtonIconFilter icon={"Genre"} text={"Genero"} /> */}
      </div>
      {/* version escritorio */}
      {/* <div className="hidden md:block bg-gray-300 justify-around flex-col items-center">
        <div className="flex justify-around mt-4 ">
          <AsociationFilter />
          <CalendarFilter />
          <GenderFilter />
        </div>
      </div> */}
    </div>
  );
}

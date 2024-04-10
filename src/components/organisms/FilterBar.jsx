// import AsociationFilter from "../molecules/AsociationFilter";
import React from "react";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";

export default function FilterBar() {
  return (
    <div className="grid grid-rows-1">
      <div className="bg-gray-200">
        <Links />
      </div>

      {/* version movil */}
      <div className="bg-gray-300 flex justify-around ">
        <ButtonIconFilter icon={"Company"} text={"Asociación"} />
        <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
        <ButtonIconFilter icon={"Genre"} text={"Genero"} />
      </div>

      {/* version escritorio */}
      <div className="hidden md:flex justify-around">
        <AsociationFilter />
        <CalendarFilter />
        <GenderFilter />
      </div>
    </div>
  );
}

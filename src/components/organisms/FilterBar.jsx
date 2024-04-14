// import AsociationFilter from "../molecules/AsociationFilter";
import React from "react";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";

export default function FilterBar() {
  return (
    // bg-green-700 flex pt-2 pb-2
    <div className="">
      <div className="bg-gray-200 hidden">
        <Links />
      </div>

      {/* version movil */}
      <div className="bg-gray-300 w-full flex justify-around">
        <div className="">
          <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
        </div>
        <div className="">
          <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
        </div>
        <div className="">
          <ButtonIconFilter icon={"Genre"} text={"Genero"} />
        </div>
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

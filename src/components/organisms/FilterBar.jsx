// import AsociationFilter from "../molecules/AsociationFilter";
import React, { useState } from "react";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";

export default function FilterBar() {

  const [visible, setVisible] = useState(false)

  return (
    // bg-green-700 flex pt-2 pb-2
    <div className="flex">
      <div className="bg-gray-200 hidden md:block">
        <div className="h-full flex items-center mr-6">
          <Links />
        </div>
      </div>

      {/* version movil */}
      <div className="bg-gray-300 w-full flex justify-around md:justify-end ">
        <div className="md:mr-14">
          <ButtonIconFilter
            icon={"Company"}
            text={"Asociación"}
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="md:mr-14">
          <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
        </div>
        <div className="md:mr-20">
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

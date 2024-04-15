// // import AsociationFilter from "../molecules/AsociationFilter";
// import React, { useState } from "react";
// import Links from "../molecules/Links";
// import CalendarFilter from "../molecules/CalendarFilter";
// import GenderFilter from "../molecules/GenderFilter";
// import AsociationFilter from "../molecules/AsociationFilter";
// import ButtonIconFilter from "../molecules/ButtonIconFilter";

// export default function FilterBar() {

//   const [visible, setVisible] = useState(true);
//   console.log("Es visible?", visible);
  

//   return (
//     // bg-green-700 flex pt-2 pb-2
//     <div className="flex">
//       <div className="bg-gray-200 hidden md:block">
//         <div className="h-full flex items-center mr-6">
//           <Links />
//         </div>
//       </div>

//       {/* version movil */}
//       <div className="bg-gray-300 w-full flex justify-around md:justify-end ">
//         <div className="md:mr-14">
//           <ButtonIconFilter
//             icon={"Company"}
//             text={"Asociación"}
//             onClick={() => setVisible(false)}
//           />
//         </div>
//         <div className="md:mr-14">
//           <ButtonIconFilter icon={"Calendar"} text={"Calendario"} />
//         </div>
//         <div className="md:mr-20">
//           <ButtonIconFilter icon={"Genre"} text={"Genero"} />
//         </div>
//       </div>

//       {/* version escritorio */}
//       {/* <div className="hidden md:block bg-gray-300 justify-around flex-col items-center">
//         <div className="flex justify-around mt-4 ">
//           {visible && <AsociationFilter/> }
//           <CalendarFilter />
//           <GenderFilter />
//           </div>
//         </div> */}
//     </div>
//   );
// }






//----------------------------------------------------------------


import React, { useState } from "react";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";
import AsociationFilter from "../molecules/AsociationFilter";
import ButtonIconFilter from "../molecules/ButtonIconFilter";

export default function FilterBar() {

  const [activeFilter, setActiveFilter] = useState(null);
  console.log("Estoy en FilterBar ActiveF: ", activeFilter);

  const handleButtonClick = (filterType) => {
    setActiveFilter(filterType);
    {
      filterType && "hidden";
    }
    console.log("filtro es: ", filterType);
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

      {/* <div className="hidden md:block bg-gray-300 justify-around flex-col items-center"> */}
      <div className="bg-gray-300 mt-1 pt-2 pb-2 flex ">
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

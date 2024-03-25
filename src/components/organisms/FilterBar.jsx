// import React from "react";
// import classnames from "classnames";
// import BookingBtn from "../atoms/Button/BookingBtn";
// import "./Filterbar.css"
// // import { useState } from 'react';
// // import ReactDatePicker from "react-datepicker";

// const FilterBar = (text, variant, icon) => {
//   const filterclasses = classnames("filterBar" //coge los estilos preestablecidos en el main.css

//     //estilos especificos en caso de que los haya.

//   );

//     return (
//       <>
//         <div className={filterclasses}>
//           <a href="#">Todas las obras</a>

//           <a href="#">Todo</a>
//           <a href="#">Mes 1</a>
//           <a href="#">Mes 2</a>
//           <a href="#">Mes 3</a>

//           <BookingBtn text={"Fecha"} variant={"gray"} icon={"Calendar"} />
//           <BookingBtn text={"Genero"} variant={"gray"} icon={"Genre"} />
//           <BookingBtn text={"Asociacion"} variant={"gray"} icon={"Company"} />
//         </div>
//       </>
//     );
//   };

// export default FilterBar;

//  // Button to show Inline version
//   // const [startDate, setStartDate] = useState(new Date());
//   // const [isOpen, setIsOpen] = useState(false);

//   // const handleChange = (e) => {
//   //   setIsOpen(!isOpen);
//   //   setStartDate(e);
//   // };
//   // const handleClick = (e) => {
//   //   e.preventDefault();
//   //   setIsOpen(!isOpen);
//   // };

//   // return (
//   //   <>
//   //     <button className="example-custom-input" onClick={handleClick}>
//   //       {format(startDate, "dd-MM-yyyy")}
//   //     </button>
//   //     {isOpen && (
//   //       <DatePicker selected={startDate} onChange={handleChange} inline />
//   //     )}
//   //   </>
//   // );



import React from "react";
import classnames from "classnames";
import BookingBtn from "../atoms/Button/BookingBtn";
// import "../../css/FilterBar.css";

const FilterBar = (text, variant, icon ) => {
  const filterclasses = classnames("filterBar");

  return (
    <>
      {/* con MediaQuery */}
      {/*<div className={filterclasses}>
        {/* <a href="#" className="all-works">
          Todas las obras
        </a>

        <a href="#" className="show-desktop">
          Todo
        </a>
        <a href="#" className="show-desktop">
          Mes 1
        </a>
        <a href="#" className="show-desktop">
          Mes 2
        </a>
        <a href="#" className="show-desktop">
          Mes 3
        </a> */}

    {/* con Tailwind */}
  <div className={filterclasses}>
        <a href="#" className="md:hidden">Todas las obras</a>

        <a href="#" className="hidden md:inline">Todo</a>
        <a href="#" className="hidden md:inline"> Mes 1</a>
        <a href="#" className="hidden md:inline"> Mes 2 </a>
        <a href="#" className="hidden md:inline">Mes 3</a>

        <BookingBtn className="filterBtn" text={"Fecha"} variant={"gray"} icon={"Calendar"} />
        <BookingBtn className="filterBtn" text={"Genero"} variant={"gray"} icon={"Genre"} />
        <BookingBtn className="filterBtn" text={"Asociacion"} variant={"gray"} icon={"Company"} />
      </div>
    </>
  );
};

export default FilterBar;

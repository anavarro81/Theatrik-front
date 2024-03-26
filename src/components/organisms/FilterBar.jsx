import React from "react";
import classnames from "classnames";
import BookingBtn from "../atoms/Button/BookingBtn";
// import "../../css/FilterBar.css";

const FilterBar = (text, variant, icon) => {
  const filterclasses = classnames("filterBar", {
    "mx-5": true, //margin
    "items-center": true,
    "underline underline-offset-8": true,
  });

  const filterIcon = classnames(
    "button relative flex items-center justify-items-center items-center justify-center border border-gray-300 rounded w-20 bg-gray-100",
    {
      // Agrega aquí cualquier clase condicional necesaria
    }
  );

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
        <a href="#" className="md:hidden">
          Todas las obras
        </a>

        <a href="#" className="hidden md:inline">
          Todo
        </a>
        <a href="#" className="hidden md:inline">
          {" "}
          Mes 1
        </a>
        <a href="#" className="hidden md:inline">
          {" "}
          Mes 2{" "}
        </a>
        <a href="#" className="hidden md:inline">
          Mes 3
        </a>

        <div className={filterIcon}>
            <BookingBtn text={"Fecha"} variant={"gray"} icon={"Calendar"} />
        </div>

        <div className={filterIcon}>
          <BookingBtn text={"Genero"} variant={"gray"} icon={"Genre"} />
        </div>
        <div className={filterIcon}>
          <BookingBtn text={"Asociacion"} variant={"gray"} icon={"Company"} />
        </div>

        {/* <BookingBtn className={filterBtn} text={"Fecha"} variant={"gray"} icon={"Calendar"} />
        <BookingBtn className={filterBtn} text={"Genero"} variant={"gray"} icon={"Genre"} />
        <BookingBtn className={filterBtn} text={"Asociacion"} variant={"gray"} icon={"Company"} /> */}
      </div>
    </>
  );
};

export default FilterBar;

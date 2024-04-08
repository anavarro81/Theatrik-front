import { React, useState } from "react";
import AsociationFilter from "./AsociationFilter.jsx";
import BookingBtn from "../atoms/Button/BookingBtn.jsx";
import Icon from "../atoms/Icon/Icon.jsx";

const ButtonIconFilter = ({ icon }) => {
    console.log("recibiendo: ", icon);

  const [showSelect, setShowSelect] = useState(false);

  const handleClick = () => {
    //setShowSelect(true); // Cambia el estado para mostrar el componente select cuando se hace clic en el botón
    setShowSelect(!showSelect); // Cambia el estado para mostrar u ocultar el componente select cuando se hace clic en el botón
  };


  return (
    <div>
      {/* Mostrar BookingBtn con el icono solo en pantallas pequeñas */}
      <div >
        <BookingBtn icon={<Icon type={icon} />} onClick={handleClick} />
      </div>

      {/* Mostrar AsociationFilter directamente en pantallas grandes */}
      <div className="hidden md:block">
        {showSelect && <AsociationFilter />}
      </div>
    </div>
  );
};

export default ButtonIconFilter;

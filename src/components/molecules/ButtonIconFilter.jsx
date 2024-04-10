// import { React, useState } from "react";
// import AsociationFilter from "./AsociationFilter.jsx";
// import BookingBtn from "../atoms/Button/BookingBtn.jsx";
// import Icon from "../atoms/Icon/Icon.jsx";

// const ButtonIconFilter = ({ children, textIcon }) => {
  
//     console.log("recibiendo: ", children, " y tambien: ", textIcon);

//   const [visible, setVisible] = useState(false);

//   const handleClick = () => {
//     //setVisible(true); // Cambia el estado para mostrar el componente select cuando se hace clic en el botón
//     setVisible(!visible); // Cambia el estado para mostrar u ocultar el componente select cuando se hace clic en el botón
//     <AsociationFilter />;
//   };


  
//   return (
//     <div>
//       {/* Mostrar BookingBtn con el icono solo en pantallas pequeñas */}
//       <div className="hidden md:block">
//         <BookingBtn icon={children} text={textIcon} onClick={handleClick} />
//       </div>

//       {/* Mostrar AsociationFilter directamente en pantallas grandes */}
//       <div className="">
//         {textIcon}
//         {children}
//         {/* {visible && <AsociationFilter />} */}
//         <AsociationFilter />
//       </div>
//     </div>
//   );
// };

// export default ButtonIconFilter;




import { React, useState } from "react";
import AsociationFilter from "./AsociationFilter.jsx";
import BookingBtn from "../atoms/Button/BookingBtn.jsx";
import Icon from "../atoms/Icon/Icon.jsx";
import classNames from "classnames";

const ButtonIconFilter = ({ icon, text }) => {
  
    console.log("recibiendo: ", icon, " y tambien: ", text);

  
  return (

    <div className="flex flex-col items-center md:hidden">
      <p className="text-center">{text}</p>
      <div className="border-2 border-orange-600 rounded-md p-1 mt-1">
        <BookingBtn icon={icon} />
      </div>
    </div>
    
  );
};

export default ButtonIconFilter;
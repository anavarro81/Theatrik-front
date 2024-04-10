import { React } from "react";
import BookingBtn from "../atoms/Button/BookingBtn.jsx";
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
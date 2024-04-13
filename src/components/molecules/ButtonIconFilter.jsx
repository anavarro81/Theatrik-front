import { React } from "react";
import BookingBtn from "../atoms/Button/BookingBtn.jsx";
import classNames from "classnames";

const ButtonIconFilter = ({ icon, text }) => {
    console.log("recibiendo: ", icon, " y tambien: ", text);
  
  return (

      <div className="border-2 border-orange-600 rounded mt-1 items-center ">
        <p className="text-sm">{text}</p>
          <BookingBtn icon={icon} className="" />
      </div>
  );
};

export default ButtonIconFilter;
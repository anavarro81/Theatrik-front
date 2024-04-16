import { React } from "react";
import BookingBtn from "../atoms/Button/BookingBtn.jsx";
import classNames from "classnames";

const ButtonIconFilter = ({ icon, text, ...props}) => {
    // console.log("recibiendo: ", icon, " y tambien: ", text);


  
  return (
    <div
      className="bg-slate-50 w-[8rem] h-11 rounded mt-1 mb-1 flex items-center shadow">
      <p className="text-sm ml-2 mr-[-2em] ">{text}</p>
      <BookingBtn icon={icon} />
    </div>
  );
};

export default ButtonIconFilter;

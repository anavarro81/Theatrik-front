import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

// import Icon from '../atoms/Icon/Icon'

const CalendarFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
        Calendario
      </p>
      <div className="h-[60px]">
        <DatePicker
          className="rounded w-[7rem] h-[37px] text-center border border-gray-300 mt-3"
          // showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        {/* <TodayIcon
          className="absolute right-2 bottom-2 transform translate-y-1/2 cursor-pointer"
          onClick={() => {
            // Lógica para mostrar el calendario al hacer clic en el ícono
          }} 
        />*/}
      </div>
    </div>
  );
};

export default CalendarFilter;

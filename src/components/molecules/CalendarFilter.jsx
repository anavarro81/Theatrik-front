import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

// import Icon from '../atoms/Icon/Icon'

const CalendarFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
        Calendario
      </p>

      <DatePicker
        className="rounded"
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CalendarFilter;

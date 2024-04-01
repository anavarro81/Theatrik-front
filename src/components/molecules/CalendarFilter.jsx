import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

// import Icon from '../atoms/Icon/Icon'

const CalendarFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <p className=" text-base font-medium leading-6 text-slate-500 text-justify m-px">
        Calendario
      </p>

      <DatePicker
        className="rounded"
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
};

export default CalendarFilter;

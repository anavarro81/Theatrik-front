import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "react-hook-form";
import { usePlays } from "../../Providers/PlaysProvider";


const CalendarFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  // const searchParams = { searchStart: "", searchEnd: "" };
  const [plays, getPlays, searchPlay, filteredPlays, searchDate] = usePlays();

  useEffect(() => {
    getPlays();
  }, []);

  // console.log("calendarFilter >> ", plays);

  const onChange = (dates) => {
    console.log("dates es: ", dates);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    searchDate(dates);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
};

export default CalendarFilter;

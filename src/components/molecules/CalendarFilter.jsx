import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { usePlays } from "../../Providers/PlaysProvider";

export default function CalendarFilter  () {
  const [startDate, setStartDate] = useState(new Date("2023-11-01"));
  const [endDate, setEndDate] = useState(null);
  const { searchDate } = usePlays()

  const onChange = (dates) => {
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



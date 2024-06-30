import React, { useState, useEffect } from "react";
import Text from "../atoms/Text/Text";
import { usePlays } from "../../Providers/PlaysProvider";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarFilter from '../molecules/CalendarFilter'
import useScreenSize from "../../../hooks/useScreenSize"
import FilterBarMobile from "../organisms/FilterBarMobile/FilterBarMobile"
import FilterBarDesktop from "../organisms/FilterBarDesktop"


export default function FilterBar({plays}) {



  const screenSize = useScreenSize();


  return (

    
    <>
      {screenSize.width <= 640 ? <FilterBarMobile plays={plays}/> : <FilterBarDesktop plays={plays}/> }
    </>
  );
}



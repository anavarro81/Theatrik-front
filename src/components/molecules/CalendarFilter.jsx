import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react'
// import Icon from '../atoms/Icon/Icon'

const CalendarFilter = () => {

const [startDate, setStartDate] = useState(new Date());

return (
  <DatePicker
    className="rounded"
    showIcon
    selected={startDate}
    onChange={(date) => setStartDate(date)}
  />
);
}

export default CalendarFilter;
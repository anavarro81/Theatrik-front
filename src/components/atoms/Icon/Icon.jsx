
import Burger from "./burger-icon.svg?react";
import Calendar from './calendar.svg?react'
import Company from './company.svg?react'
import Genre from './genre.svg?react'
import Glove from './globe.svg?react'
import Logo from './Logo.svg?react'
import Smartphone from './smartphone.svg?react'
import Search from './search.svg?react'
import Map from './map.svg?react'
import Mail from './mail.svg?react';
import Arrow from './arrow.svg?react';
import House from './house.svg?react';
import ChevronRight from './chevron-r.svg?react';
import ChevronLeft from './chevron-l.svg?react';
import Clock from './clock.svg?react'
import Calendar_Yellow from './calendar-yellow.svg?react'

// ...

export default function Icon({type}) {
    return (
        <>
        
        {type === "Burger" && <Burger/> }
        {type === "Calendar" && <Calendar/> }
        {type === "Company" && <Company/> }
        {type === "Genre" && <Genre/> }
        {type === "Glove" && <Glove/> }
        {type === "Logo" && <Logo/> }
        {type === "Smartphone" && <Smartphone/> }
        {type === "Search" && <Search/> }
        {type === "Map" && <Map/> }
        {type === "Mail" && <Mail/> }
        {type === "Arrow" && <Arrow/>}
        {type === "House" && <House/>}
        {type === "Clock" && <Clock/>}
        {type === "ChevronRight" && <ChevronRight/>}
        {type === "ChevronLeft" && <ChevronLeft/>}
        {type === "Calendar_Yellow" && <Calendar_Yellow/>}
        
        </>
            
        
    );
}
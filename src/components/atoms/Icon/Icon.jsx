
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
        
        </>
            
        
    );
}
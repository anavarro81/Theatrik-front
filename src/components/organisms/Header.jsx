import React from 'react'
import SearchBar from '../molecules/SearchBar'
import Icon from '../atoms/Icon/Icon'
import usePlays from '../../Hooks/usePlays';
import {useState, useEffect} from "react"

const Header = ({placeholder}) => {

  const [searchTerm, setSearchTerm] = useState("")

  const [plays, search] = usePlays();
  
  const handleSearch = () => {
    console.log(event.target.value);
    setSearchTerm(event.target.value)

  }

  return (
    <>
    
    <div className='flex flex-row justify-between px-4 mb-4'>
    <Icon type={"Logo"}/>
    <div className='space-x-4'>
      <input type="text" onChange={handleSearch}/>      
      
      
      <button onClick={()=> search(searchTerm)}>  <Icon type={"Search"}/> Buscar </button>
      <Icon type={"Burger"}/>
    </div>
    </div>
    </>
    

    
  )
}

export default Header
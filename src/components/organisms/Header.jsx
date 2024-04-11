import React from 'react'
import SearchBar from '../molecules/SearchBar'
import Icon from '../atoms/Icon/Icon'
// import usePlays from '../../Hooks/usePlays';
import {useState, useEffect} from "react"
import {usePlays} from '../../Providers/PlaysProvider'

const Header = ({placeholder}) => {

  const [searchParams, setSearchParams] = useState({searchTerm: "", searchFor: ""})

  const [plays, getPlays, filteredPlays, searchPlay] = usePlays();
  
  const handleSearch = (event) => {
    const { name, value } = event.target;   
    
    setSearchParams({ searchTerm: value, searchFor: name})
  } 




  return (
    <>
    
    <div className='flex flex-row justify-between px-4 mb-4'>
    <Icon type={"Logo"}/>
    <div className='space-x-2'>
      <input type="text" name="title" onChange={handleSearch} className="border-2 border-solid"/>      
      
      
      <button onClick={()=> searchPlay(searchParams)}>   Buscar </button>
      {/* <Icon type={"Burger"}/> */}

      <select
      onChange={handleSearch}
      name="company_name"
      >      
        <option value="Cualquiera">-Cualquiera-</option>
        <option value="Druida">Druida</option>
        <option value="Driades">Driades</option>
        <option value="ATMA">ATMA</option>

      </select>    

      <select
      onChange={handleSearch}
      name="genre"
      >      
        <option value="Cualquiera">-Cualquiera-</option>
        <option value="comedia">Comedia</option>
        <option value="drama">Drama</option>
        <option value="infantil">Infantil</option>

      </select>    


    </div>
    
    </div>




    </>
    

    
  )
}

export default Header
import React from 'react'
import SearchBar from '../molecules/SearchBar'
import Icon from '../atoms/Icon/Icon'
import { usePlays } from '../../Providers/PlaysProvider'
import { useState } from 'react'
import {useLocation, Link, useNavigate} from "react-router-dom";



const Header = ({placeholder}) => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const {multipleSearch} = usePlays();

  const [searchString, setSearchString] = useState("")

  const handleSearch = () => {
    
    
    if (location.pathname == '/') {  
      navigate(`/search/?search=${searchString}`)
      
    }    
    
    multipleSearch(searchString)

  }




  return (
    <>

    <div className='flex flex-row justify-between px-4 mb-4'>
    <Link to='/'> 
    <Icon type={"Logo"}/>
    </Link>
    <div className='space-x-4 m-2 flex' >      
      <input type="text" placeholder='Obra o asociación' className="border p-3 w-full" onChange={() => setSearchString(event.target.value)}/>
      <button onClick={handleSearch}>
      <Icon type={"Search"}/>
      </button>
      { location.pathname != '/' && <Link to={'/'} > <Icon type={"House"}/> </Link> }
 
    </div>
    </div>
    </>



  )
}

export default Header;
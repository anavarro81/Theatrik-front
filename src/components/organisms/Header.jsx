import React from 'react'
import SearchBar from '../molecules/SearchBar'
import Icon from '../atoms/Icon/Icon'

const Header = ({placeholder}) => {
  
  const handleSearch = () => {
    console.log('Estoy buscando...');
  }
  
  return (
    <>
    
    <div className='flex flex-row justify-between px-4 mb-4'>
    <Icon type={"Logo"}/>
    <div className='space-x-4 m-2 flex' >      
      <input type="text" placeholder='Obra o asociación' className="border p-3 w-full"/>
      <button onClick={handleSearch}>
      <Icon type={"Search"}/>
      </button>
      <Icon type={"Burger"}/>
    </div>
    </div>
    </>
    

    
  )
}

export default Header
import React from 'react'
import SearchBar from '../molecules/SearchBar'
import Icon from '../atoms/Icon/Icon'

const Header = ({placeholder}) => {
  return (
    <>
    
    <div className='flex flex-row justify-between px-4 mb-4'>
    <Icon type={"Logo"}/>
    <div className='space-x-4'>      
      <Icon type={"Search"}/>
      <Icon type={"Burger"}/>
    </div>
    </div>
    </>
    

    
  )
}

export default Header
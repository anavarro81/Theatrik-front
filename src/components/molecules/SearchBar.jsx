import React from 'react'
import Icon from '../atoms/Icon/Icon'
import ButtonTest from '../atoms/Button/ButtonTest'

const SearchBar = ({placeholder}) => {
    // classNameNameName="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    // <Input type='text' placeholder='Buscar producto...' />
    
    return (

        
<div className="relative ">
  
  <input type="text" className="border m-2 rounded-md pl-2 pr-4 py-2 w-full " placeholder={placeholder}/>

  <button className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">  
        <Icon type="Search"></Icon>
  </button>
</div>  



    
  )
}

export default SearchBar
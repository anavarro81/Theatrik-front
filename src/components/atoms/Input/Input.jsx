import React from 'react'

const Input = ({type, name, label, onInputChange}) => {


  const handleImputChange = () => {
    const value  = event.target.value;
    onInputChange(value) 
  }

  return (
    <>
     
    <label className='absolute -top-3 left-2 bg-white' for={name}> {label} </label>
    <input className="border p-3 w-full" type={type} name={name} onChange={handleImputChange}/>
    
    </>
    
  )
}

export default Input



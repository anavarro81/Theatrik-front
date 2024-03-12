import React from 'react'

const BookingButton = (props) => {
  return (
    <>
    <button className={`bg-${props.styles}`}>
        {props.label} 
    </button>
    </>
    
  )
}

export default BookingButton
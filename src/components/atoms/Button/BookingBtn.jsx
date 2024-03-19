import React from 'react'
import classnames from "classnames"

const BookingBtn = ({text, variant, url}) => {

  const buttonClasses = classnames('button', {
    "text-white": variant === 'white',
    "text-greyDesing": variant === 'gray',
    "bg-orangeDesing": variant === 'orange'        
  })



  return (
    <button className={buttonClasses}> <a href={url}>  {text} </a> </button>
  )
}

export default BookingBtn
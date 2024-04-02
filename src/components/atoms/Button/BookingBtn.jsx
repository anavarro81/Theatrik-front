import React from 'react'
import classnames from "classnames"

const BookingBtn = ({text, variant, url}) => {

  const buttonClasses = classnames('button', {
    //"text-white": variant === 'white',
    "text-greyDesign font-bold bg-white": variant === 'gray',
    "text-white font-bold bg-orangeDesign ": variant === 'orange',
    "text-white font-bold bg-transparent hover:underline": variant === 'paginationBtn'       
  })



  return (
    <button className={buttonClasses}> <a href={url}>  {text} </a> </button>
  )
}

export default BookingBtn
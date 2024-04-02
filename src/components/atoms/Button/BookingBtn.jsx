import React from 'react'
import classnames from "classnames"

const BookingBtn = ({text, variant, url}) => {

  const buttonClasses = classnames('button', {

    "text-greyDesign font-bold bg-white": variant === 'gray',
    "text-white font-bold border-none bg-transparent hover:underline": variant === 'paginationBtn',       
    "bg-white w-11/12 ": variant === 'button-playCard',
    "bg-orangeDesing w-full": variant === 'orange'        
  })


  return (
    <button className={buttonClasses}>
      {/* <a href={url}> */}
      <p>{text}</p>
      {/* </a> */}
    </button>
  )


}

export default BookingBtn
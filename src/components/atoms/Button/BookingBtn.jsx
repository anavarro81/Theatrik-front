import React from 'react'
import classnames from "classnames"
import Icon from '../Icon/Icon'

const BookingBtn = ({text, variant, url, icon}) => {

  const buttonClasses = classnames('button', {

    "text-greyDesign font-bold bg-white": variant === 'gray',
    //"text-white font-bold bg-orangeDesign ": variant === 'orange',
    "text-white font-bold bg-transparent hover:underline": variant === 'paginationBtn',       
    "bg-white w-11/12 ": variant === 'button-playCard',
    "bg-orangeDesing w-full": variant === 'orange'        
  })



  return (
    <button className={buttonClasses}>
      <a href={url}> <Icon type={icon} />
      <p>{text}</p>
      </a>
    </button>
  )


}

export default BookingBtn
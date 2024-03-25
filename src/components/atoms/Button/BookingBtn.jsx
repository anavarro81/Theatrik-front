import React from 'react'
import classnames from "classnames"
import Icon from '../Icon/Icon'

const BookingBtn = ({text, variant, url, icon, clase}) => {

  const buttonClasses = classnames('button', {
    "bg-white w-11/12 ": variant === 'button-playCard',
    "text-greyDesing": variant === 'gray',
    "bg-orangeDesing w-full": variant === 'orange'        
  })



  return (
    <button className={buttonClasses}> <a href={url}> <Icon type={icon} />{text} </a> </button>
  )


}

export default BookingBtn
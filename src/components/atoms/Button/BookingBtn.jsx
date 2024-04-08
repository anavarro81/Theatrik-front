import React from 'react'
import classnames from "classnames";
import Icon from "../Icon/Icon";

const BookingBtn = ({text, variant, url, icon}) => {

  const buttonClasses = classnames('button', {

    "text-greyDesign font-bold bg-white": variant === 'gray',
    "text-white font-bold border-none bg-transparent hover:underline": variant === 'paginationBtn',       
    "bg-white w-full ": variant === 'button-playCard',
    "bg-orangeDesing w-full": variant === 'orange'        
  })


  return (
    <button className={buttonClasses}>
      {/* <a href={url}> */}
      {text && <p>{text}</p>}
      {icon && <Icon type={icon}/>}
      {/* </a> */}
    </button>
  )


}

export default BookingBtn
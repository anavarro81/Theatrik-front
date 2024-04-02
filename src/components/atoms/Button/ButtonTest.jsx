import React from 'react'
import classnames from "classnames"
import Icon from '../Icon/Icon'

const ButtonTest = ({text, variant, url, icon}) => {

  const buttonClasses = classnames('button', {
    "text-white": variant === 'white',
    "text-greyDesing": variant === 'gray',
    "bg-orangeDesing": variant === 'orange'        
  })



  return (
    <button className='absolute right-0'> 
    {icon && <Icon type={icon} />}
    <a href={url}>  {text} 
    </a> 
    </button>
  )
}

export default ButtonTest
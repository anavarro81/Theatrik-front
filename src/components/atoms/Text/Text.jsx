import React from 'react'
import classnames from "classnames"



const Text = ({text, variant}) => {

  const textClasses = classnames('text', {
    "text-white": variant === 'white',
    "text-greyDesign": variant === 'gray'        
  })


  return (
    <p className={textClasses}> {text} </p>
  )
}

export default Text
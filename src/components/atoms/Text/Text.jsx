import React from 'react'
import classnames from "classnames"



const Text = ({text, variant, type}) => {

  const textClasses = classnames('text', {

    "text-white": variant === 'white',
    "text-greyDesign": variant === 'gray',        
    "text-white ": variant === 'link'

  })


  return (
  <>
    { type === "noLink" && <p className={textClasses}> {text} </p> }
    { type === "link" && <a href="#" className={textClasses}> {text} </a> }

    </>  
  )
}

export default Text
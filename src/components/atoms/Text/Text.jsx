import React from 'react'
import classnames from "classnames"



const Text = ({text, variant, colorText}) => {

  const textClasses = classnames('text', colorText, {
    "text-white ": variant === 'link',
    
  })


  return (
  <>
    { variant === "noLink" && <p className={textClasses}> {text} </p> }
    { variant === "link" && <a href="#" className={textClasses}> {text} </a> }
    { variant !== "link" && variant !== "noLink" && <span className={textClasses}> {text} </span>}

    </>  
  )
}

export default Text
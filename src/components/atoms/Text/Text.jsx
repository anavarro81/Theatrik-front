import React from 'react'
import classnames from "classnames"



const Text = ({text, variant}) => {

  const textClasses = classnames('text', {
    "text-white ": variant === 'link',
    
  })


  return (
  <>
    { variant === "noLink" && <p className={textClasses}> {text} </p> }
    { variant === "link" && <a href="#" className={textClasses}> {text} </a> }

    </>  
  )
}

export default Text
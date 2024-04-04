import React from 'react'
import classnames from "classnames"



const Text = ({text, variant, type}) => {

  const textClasses = classnames('text', {

    "text-white": variant === 'white',
    "text-greyDesign": variant === 'gray',        
    "text-white underline": variant === 'link'

  })


  return (
  <>
    { type === "link" ? <a href="#" className={textClasses}> {text} </a> : <p className={textClasses}> {text} </p>}

    

    </>  
  )
}

export default Text
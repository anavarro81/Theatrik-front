import React from 'react'
import classnames from "classnames"
import { usePlays } from '../../../Providers/PlaysProvider'


const Text = ({text, variant, type, url, id }) => {

  const {deleteFilters} = usePlays()

  const textClasses = classnames('text', {

    "text-white": variant === 'white',
    "text-greyDesign": variant === 'gray',        
    "text-white underline": variant === 'link',
    "text-greyDesign underline cursor-pointer": variant === 'deleteFilterLink'
  })

  const handleClick = () => {
    console.log('id: ', event.target.id);

    if (event.target.id == 'deleteFilterLink' ) {
      deleteFilters()
    }

    

  }


  return (
  <>
    { type === "link" ? <a href={url} className={textClasses} > {text} </a> : <p className={textClasses} onClick={handleClick} id={id}> {text} </p>}

    

    </>  
  )
}

export default Text
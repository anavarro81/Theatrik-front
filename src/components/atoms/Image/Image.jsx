import React from 'react'

const Image = ({url, alt}) => {
  return (
    
    <img className="w-full h-auto" src={url} alt={alt} />
  )
}

export default Image
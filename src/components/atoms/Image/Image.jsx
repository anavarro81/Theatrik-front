import classNames from 'classnames'
import React from 'react'

const Image = ({url, alt, variant}) => {

  const imageClasses = classNames('image',{
    "md:rounded-xl": variant === 'rounded',
    "w-full h-auto rounded-lg": variant === 'imgFilter',
    "w-full rounded-lg" :  variant === 'imageHeader',
     "w-full ":variant === 'img-mobile-bk-pg',
     "max-w-full h-auto object-cover lg:max-w-[465px]": variant === 'img-bookingPage'
     
  })

  

  return (
    
    <img src={url} alt={alt} className={imageClasses} />
    
  )
}

export default Image
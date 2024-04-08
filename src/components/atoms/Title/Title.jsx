import classnames from "classnames"



const Title = ({type, variant, text}) => {

    const titleClasses = classnames('title', {
        "text-orangeDesign": variant === 'orange',
        "text-greyDesign": variant === 'gray',
        "text-white": variant === 'white',
        "text-white text-lg mb-0.5 md:text-5xl md:mb-6 md:pt-6": variant === 'slider-title-white',
        "text-orangeDesign text-xl mb-0.5 md:text-2xl md:mb-1.5": variant === 'slider-title-orange'        
      })


  return (
    <>
    
    {type === "H1" && <h1 className={titleClasses}> {text} </h1> }
    {type === "H2" && <h2 className={titleClasses}> {text} </h2> }
    {type === "H3" && <h3 className={titleClasses}> {text} </h3> }
    
    </>
    
  )
}

export default Title
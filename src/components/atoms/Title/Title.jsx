import classnames from "classnames"



const Title = ({type, variant, text}) => {

    const titleClasses = classnames('title', {
        "text-orangeDesing": variant === 'orange',
        "text-greyDesing": variant === 'gray',
        "text-white": variant === 'white'        
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
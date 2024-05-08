import {useContext, useEffect} from 'react'
import Image from '../../components/atoms/Image/Image'
import Input from '../../components/atoms/Input/Input'
import Icon from '../../components/atoms/Icon/Icon'
import Title from '../../components/atoms/Title/Title'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { usePlays } from '../../Providers/PlaysProvider'

const SearchResultsPage = () => {
  
  // const [[plays, getPlays, filteredPlays, updateSlider, sliderPlays, searchPlay, multipleSearch, getData]] = usePlays();

  const {multipleSearch, filteredPlays, } = usePlays();
  console.log(multipleSearch);
  console.log(filteredPlays);
  

  

  const {SearchQ} = useParams();

  useEffect(() => {
    multipleSearch(SearchQ)
  
  }, [SearchQ])
  
    
    
return (

    <>



    <Image/>    
    <input type="text" placeholder='Obra o asociación' className="border p-3 w-full"/>
    <button>
        <Icon type={"Search"}/>
    </button>
    
    <Title type={"H1"} text={"Resultados de la busqueda"}/>  / { filteredPlays.length } resultados

    {filteredPlays.map((play) => (
        <div className='mb-2' key={play._id}>
            
            <Link to={`/info/${play._id}`} > <Title type={"H2"} text={play.title}/> </Link>
            
            {/* <Link to=`/info/` >    */}
            <p>  {play.synopsis} </p>
        </div>
    ))}
  
  {filteredPlays.length == 0 && <Title type={"H2"} text={"No existen resultados"}>  </Title> }
  


    </>

  )
  
}

export default SearchResultsPage
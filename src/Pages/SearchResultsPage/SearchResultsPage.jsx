import {useContext, useEffect, useState} from 'react'
import Image from '../../components/atoms/Image/Image'
import Input from '../../components/atoms/Input/Input'
import Icon from '../../components/atoms/Icon/Icon'
import Title from '../../components/atoms/Title/Title'
import { Link, useSearchParams } from 'react-router-dom'
import { usePlays } from '../../Providers/PlaysProvider'

const SearchResultsPage = () => {
  
  

  const [searchTerm, seSearchTerm] = useState();
  
  const {multipleSearch, filteredPlays } = usePlays();
  
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the value of a specific query param
  const paramValue = searchParams.get('search');
  

  const handleSearch = () => {
    multipleSearch(searchTerm)
  }

  useEffect(() => {
    multipleSearch(paramValue)
  
  }, [paramValue])
  
    
    
return (

    <>



    <Image/>

    <div className='container mx-auto w-[80%]'>
      <div className='flex flex-col mb-4'  >

      <div className='flex' id='searchResult'>
          <Title type={"H1"} text={"Resultados de la búsqueda"} />  
          <Title type={"H2"} text={`/ ${filteredPlays.length} resultados`} />          
        </div>

        <div className='flex w-full' id='search'>
        <input 
          type="text" 
          placeholder='Obra o asociación' 
          className="border p-3 w-full "
          onChange={() => seSearchTerm(event.target.value)}
          />
        <button onClick={handleSearch}>
            <Icon type={"Search"}/>
        </button>
        </div>    
      
      <div>

          {filteredPlays.map((play) => (
              <div className='mb-2 ' key={play._id}>
                  
                  <Link to={`/info/${play._id}`} > <Title type={"H2"} text={play.title}/> </Link>
                  
                  {/* <Link to=`/info/` >    */}
                  <p className='w-fit'>  {play.synopsis} </p>
              </div>
          ))}

          {filteredPlays.length == 0 && <Title type={"H2"} text={"No existen resultados"}>  </Title> }
      </div>  
      
      
      </div>
    

          
    
  
  </div>

    </>

  )
  
}

export default SearchResultsPage
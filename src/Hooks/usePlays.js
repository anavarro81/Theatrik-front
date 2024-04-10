import {useState, useEffect} from "react"

function usePlays(params) {

  const [plays, setPlays] = useState([])
  const [filteredplays, setfilterplays] = useState([])

  const getPlays = () => {
    fetch('http://localhost:5002/play/getAllPlays')
    .then((res) => res.json())
    .then((data) => setPlays(data))
    
  }

  const searh = (searchTerm) => {
    console.log('Estoy en buscar: ', searchTerm);
    console.log(plays)

    const result = plays.filter((play) => {
      return play.company_name === searchTerm 
    })

    console.log(' result > ', result);
    setfilterplays(result)
    
  }


  useEffect(() => {
    getPlays() 
  }, [])

  return [plays, searh, filteredplays]
  
  
}

export default usePlays;
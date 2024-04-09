import React, { useEffect, useState } from 'react'

function usePlays () {

    const [plays, setplays] = useState([])
    
    const getPlays = () => {
        console.log('getPlays');
        fetch('http://localhost:5002/play/getAllPlays')
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            console.log('recupero: ', data);
            setplays(data)
          })
      }
      
      
      useEffect(() => {
        getPlays()
      
      }, [])
      
    
    return {plays, getPlays}

}

export {usePlays}

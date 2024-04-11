import React, { createContext, useContext, useState } from 'react';

const PlaysContext = createContext();

function PlaysProvider ({ children }) {
    
    const [plays, setPlays] = useState([])
    const [filteredPlays, setFilteredPlays] = useState([])
    
    const getPlays = () => {
        fetch('http://localhost:5002/play/getAllPlays')
        .then((res) => res.json())
        .then((data) => setPlays(data))
        
        
      }

    const searchPlay = (searchParams) => {
        
        

        const {searchTerm, searchFor} = searchParams

        
        const result = plays.filter((play) => {
            return play[searchFor].includes(searchTerm)
          })

      
          setFilteredPlays(result)

    }
    

    return (
        <PlaysContext.Provider value={[plays, getPlays, filteredPlays, searchPlay]}>
            { children }
        </PlaysContext.Provider>
    );

}

function usePlays () {    
    const context = useContext(PlaysContext)
    if (!context) {
        throw new Error('usePlays debe ser usado dentro de un PlaysProvider');
    }
    
    return context;    
}




export { PlaysProvider, usePlays};
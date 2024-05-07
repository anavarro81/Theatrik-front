import React, { createContext, useContext, useState } from "react";

// Se crea un contexto para almacenar el estado de las obras de teatro y las funciones relacionadas
const PlaysContext = createContext();

export function PlaysProvider({ children }) {
  // Se inicializan dos estados para almacenar las obras de teatro y las obras filtradas
  const [plays, setPlays] = useState([]);
  const [filteredPlays, setFilteredPlays] = useState([]);
  const [sliderPlays, setsliderPlays] = useState([]);

  // Función para obtener todas las obras de teatro desde el servidor
  const getPlays = () => {
    fetch("http://localhost:5002/play/getAllPlays")
      .then((res) => res.json())
      .then((data) => {
        setPlays(data)        
        
        
        });
  };

  const getData = () => {
    fetch("http://localhost:5002/play/getAllPlays")
    .then((res) => res.json())
    .then((data) => {
      setPlays(data)        
      updateSlider(data)      
      });
    
  }

  // Función para buscar obras de teatro según un término y un criterio de búsqueda
  const searchPlay = (searchParams) => {
    const { searchTerm, searchFor } = searchParams;

    // Filtrar las obras de teatro según el criterio de búsqueda y establecerlas en el estado de obras filtradas
    const result = plays.filter((play) => {
      return play[searchFor].includes(searchTerm);
    });

    setFilteredPlays(result);
  };

  const multipleSearch = (searchString) => {

    
    

    const results = plays.filter(play => {
      
      if (play.title.includes(searchString) || play.company_name.includes(searchString)) {
          return play
      }
    })

    
    setFilteredPlays(results)

  }

  const updateSlider = (plays) => {
    
    const currentDate = (new Date("2023-11-05"))   
    const data = plays?.filter(play => new Date(play.date) >= currentDate).slice(0,5);
    setsliderPlays(data)
  }


  // Se devuelve el contexto proporcionando los estados y las funciones a través del contexto
  return (

    // ! <PlaysContext.Provider value={[plays, getPlays, filteredPlays, searchPlay, multipleSearch]}>
    <PlaysContext.Provider value={[plays, getPlays, filteredPlays, updateSlider, sliderPlays, searchPlay, multipleSearch, getData]}>
      {children}
    </PlaysContext.Provider>
  );


}



// Hook personalizado para acceder al contexto de las obras de teatro y las funciones relacionadas
export function usePlays() {
  return useContext(PlaysContext);

  // const context = useContext(PlaysContext);
  // if (!context) {
  //   throw new Error("usePlays debe ser usado dentro de un PlaysProvider");
  // }

  // return context;

}

// export { PlaysProvider, usePlays };


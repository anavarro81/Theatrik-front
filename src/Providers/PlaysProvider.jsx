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
        setPlays(data);
      });
  };

  const getData = () => {
    fetch("http://localhost:5002/play/getAllPlays")
      .then((res) => res.json())
      .then((data) => {
        setPlays(data);
        updateSlider(data);
      });
  };

  // Función para buscar obras de teatro según un término y un criterio de búsqueda
  const searchPlayGenre = (searchParams) => {
    const { searchTerm, searchFor } = searchParams;

    // Filtrar las obras de teatro según el criterio de búsqueda y establecerlas en el estado de obras filtradas
    const result = plays.filter((play) => {
      return play[searchFor].includes(searchTerm);
    });

    setFilteredPlays(result);
  };

   const searchPlayAsociation = (searchParams) => {
     const { searchTerm, searchFor } = searchParams;

     // Filtrar las obras de teatro según el criterio de búsqueda y establecerlas en el estado de obras filtradas
     const result = plays.filter((play) => {
       return play[searchTerm].includes(searchFor);
     });

     setFilteredPlays(result);
   };

  const multipleSearch = (searchString) => {
    
    
    
    const results = plays.filter((play) => {
      
      if (
        play.title.toLowerCase().includes(searchString.toLowerCase()) ||
        play.company_name.toLowerCase().includes(searchString.toLowerCase())
      ) {
        return play;
      }
    });

    setFilteredPlays(results);
  };

  const updateSlider = (plays) => {
    const currentDate = new Date("2023-11-05");
    const data = plays
      ?.filter((play) => new Date(play.date) >= currentDate)
      .slice(0, 5);
    setsliderPlays(data);
  };

  //filtramos por fecha
  const searchDate = (dates) => {
    const [startDate, endDate] = dates;

    //combertir las fechas a formato JS
    const fechaInicio = new Date(startDate);
    const fechaFinal = new Date(endDate);

    console.log(`Inicio ${fechaInicio} \n final ${endDate}`);

    const result = plays.filter((play) => {
      const fechaObra = new Date(play.date);

      if (fechaInicio <= fechaObra && fechaObra <= fechaFinal) {
        return play;
      }
    });
    setFilteredPlays(result);
  };

  

  // Borra todos los filtros. 
  const deleteFilters = () => {
    setFilteredPlays([])
  }

  const datos = {
    plays: plays,
    getPlays: getPlays,
    filteredPlays: filteredPlays,
    updateSlider: filteredPlays,
    sliderPlays: sliderPlays,
    searchPlayGenre: searchPlayGenre,
    searchPlayAsociation: searchPlayAsociation,
    multipleSearch: multipleSearch,
    getData: getData,
    searchDate: searchDate,    
    deleteFilters

  };

  

  // Se devuelve el contexto proporcionando los estados y las funciones a través del contexto
  return (
    //! <PlaysContext.Provider value={[plays, getPlays, filteredPlays, updateSlider, sliderPlays, searchPlay, multipleSearch, getData]}>

    <PlaysContext.Provider value={datos}>{children}</PlaysContext.Provider>
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

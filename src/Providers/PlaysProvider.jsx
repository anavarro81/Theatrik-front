import React, { createContext, useContext, useState } from "react";

// Se crea un contexto para almacenar el estado de las obras de teatro y las funciones relacionadas
const PlaysContext = createContext();

const PlaysProvider = ({ children }) => {
  // Se inicializan dos estados para almacenar las obras de teatro y las obras filtradas
  const [plays, setPlays] = useState([]);
  const [filteredPlays, setFilteredPlays] = useState([]);

  // Función para obtener todas las obras de teatro desde el servidor
  const getPlays = () => {
    fetch("http://localhost:5002/play/getAllPlays")
      .then((res) => res.json())
      .then((data) => {setPlays(data)
        // console.log("plays", data)
      })
  };

  // Función para buscar obras de teatro según un término y un criterio de búsqueda
  const searchPlay = (searchParams) => {
    // Esta línea utiliza la destructuración de objetos para extraer las propiedades searchTerm y searchFor del objeto searchParams
    const { searchTerm, searchFor } = searchParams;
    // console.log(searchTerm, searchFor);

    // Filtrar las obras de teatro según el criterio de búsqueda y establecerlas en el estado de obras filtradas
    const result = plays.filter((play) => {
      return play[searchTerm].includes(searchFor);
    });

    setFilteredPlays(result);
    // console.log("result filtered", result);
  };

  //filtramos por fecha
  const searchDate = (dates) => {
    const [ startDate, endDate ] = dates;
    console.log(`inicio Provider ${startDate} y fin Provider ${endDate}`);
  
    // console.log(`inicio y fin de las fechas en Provider ${dates}`);
    // const result = plays.filter((play) => {
    //   return play[searchTerm].includes(searchFor);
  }


  // Se devuelve el contexto proporcionando los estados y las funciones a través del contexto
  return (
    <PlaysContext.Provider value={[plays, getPlays, searchPlay, filteredPlays, searchDate]}>
      {children}
    </PlaysContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de las obras de teatro y las funciones relacionadas
const usePlays = () => {
  const context = useContext(PlaysContext);
  if (!context) {
    throw new Error("usePlays debe ser usado dentro de un PlaysProvider");
  }

  return context;
};

export { PlaysProvider, usePlays };

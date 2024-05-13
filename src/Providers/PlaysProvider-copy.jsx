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
      })
  };

  // Función para buscar obras de teatro según un término y un criterio de búsqueda
  const searchPlay = (searchParams) => {
    // Esta línea utiliza la destructuración de objetos para extraer las propiedades searchTerm y searchFor del objeto searchParams
    const { searchTerm, searchFor } = searchParams;

    // Filtrar las obras de teatro según el criterio de búsqueda y establecerlas en el estado de obras filtradas
    const result = plays.filter((play) => {
      return play[searchTerm].includes(searchFor);
    });

    setFilteredPlays(result);
  };

  //filtramos por fecha yeray y antonio
  const searchDate = (dates) => {
    const [ startDate, endDate ] = dates;

    //combertir las fechas a formato JS
    const fechaInicio =  new Date(startDate);
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
  console.log("providers filteredPlays: ", filteredPlays);
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
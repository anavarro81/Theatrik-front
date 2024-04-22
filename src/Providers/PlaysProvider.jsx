import React, { createContext, useContext, useState } from "react";

const PlaysContext = createContext();

const PlaysProvider = ({ children }) => {
  // Definir estado global
  const [ plays, setPlays ] = useState([]);
  const [filteredPlays, setFilteredPlays] = useState([]);

  // Define funcion para traer los datos
    const getPlays = () => {
    fetch("http://localhost:5000/play/getAllPlays")
      .then((res) => res.json())
      .then((data) => setPlays(data));
  };

const searchPlay = (searchParams) => {
    const { searchTerm, searchFor } = searchParams;

    console.log(searchTerm, searchFor);
    // Filtrar las obras de teatro según el criterio de búsqueda y establecerlas en el estado de obras filtradas
    const result = plays.filter((play) => {
      return play[searchTerm].includes(searchFor);
    });
console.log(result);

    setFilteredPlays(result);
  };

  return (
    <PlaysContext.Provider
      value={[plays, getPlays, searchPlay, filteredPlays]}
    >
      {children}
    </PlaysContext.Provider>
  );
};

const usePlays = () => {
  const context = useContext(PlaysContext);
  if (!context) {
    throw new Error("usePlays debe ser usado dentro de un PlaysProvider");
  }

  return context;
};

export { PlaysProvider, usePlays };

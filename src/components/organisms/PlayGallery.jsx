import React from 'react'
import PlayCard from '../molecules/PlayCard'
import Title from '../atoms/Title/Title'

const play = {
    _id: '660d69e9c1e3b917dbb4a310',
    cartel: 'https://res.cloudinary.com/dnisd4vxs/image/upload/v1712159753/theatrik/rcwmfivx50zl8cw3j9za.jpg',
    company: "Driades",
    title: "Zona Salvaje",
    genre: "comedia",
    date: "2023-11-03T00:00:00.000+00:00",
    time: "20:00",
    place: "Teatro Auditorio Ciudad Alcobendas",
    synopsis: "Cuatro relatos que nos muestran sig...",
    actors: "Ainhoa García Ariz, Adrián Fernández",
    director: "Arturo Hernández",
    setDesing: "Dríades",
    costume: "Dríades"

  }


const PlayGallery = () => {
  return (
    <> 
    <Title type="H2" text={"Cartelera"}>  </Title>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 xl:grid-cols-3' >
        <PlayCard play={play} /> 
        <PlayCard play={play} /> 
        <PlayCard play={play} /> 
        <PlayCard play={play} /> 
        <PlayCard play={play} /> 
        <PlayCard play={play} /> 
    </div>
    </>

  )
}

export default PlayGallery
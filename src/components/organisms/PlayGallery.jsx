import React from 'react'
import PlayCard from '../molecules/PlayCard'
import Title from '../atoms/Title/Title'



const PlayGallery = ({plays}) => {
  return (
    <> 
    <Title type="H2" text={"Cartelera"}>  </Title>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 xl:grid-cols-3' >
      {plays.map((play) => <PlayCard key={play._id} play={play}/>)}
    </div>
    </>

  )
}

export default PlayGallery
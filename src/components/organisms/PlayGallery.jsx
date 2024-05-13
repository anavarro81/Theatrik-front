import { useState } from 'react'
import PlayCard from '../molecules/PlayCard'
import Title from '../atoms/Title/Title'
import Pagination from '../molecules/GalleryPagination';



const PlayGallery = ({plays}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [playsPerPage, setPlaysPerPage] = useState(6); // setPlaysPerPage de momento no se usa

  const lastPlayIndex = currentPage * playsPerPage;
  const firstPlayIndex = lastPlayIndex - playsPerPage;
  const currentPlays = plays.slice(firstPlayIndex, lastPlayIndex);


  return (
    <> 
    <Title type="H2" text={"Cartelera"}/>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 xl:grid-cols-4' >
      {currentPlays?.map((play) => <PlayCard key={play._id} play={play}/>)}
    </div>
    <Pagination
                totalPlays={plays.length}
                playsPerPage={playsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
      />
    </>

  )
}

export default PlayGallery
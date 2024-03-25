import React from 'react'
import Image from '../atoms/Image/Image'
import Title from '../atoms/Title/Title'
import Text from '../atoms/Text/Text'
import BookingBtn from '../atoms/Button/BookingBtn'
const PlayCard = () => {
  return (
    
    
    <div className='bg-black'>
    
        <Image url={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Douglas_Fairbanks_Robin_Hood_1922_film_poster.jpg/220px-Douglas_Fairbanks_Robin_Hood_1922_film_poster.jpg"} alt={"imagen obra"}/>
        <Title type={"H2"} variant={"white"} text={"ZONA SALVAJE"}/>
        <Title type={"H3"} variant={"white"} text={"DRIADES"}/>
        <Text text ={"Sábado, 10 de octubre de 2023"} variant={"white"}/>        
        
        <div className='flex justify-center'>
            <BookingBtn text={"Reservar"} variant={"button-playCard"} url={""}/>
        </div>
        
        <div>
            <Text text ={"Más información"} variant={"white"}/>
        
        </div>
    </div>
    
  )
}

export default PlayCard
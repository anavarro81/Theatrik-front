
import React from "react";
import Image from "../atoms/Image/Image";
import Title from "../atoms/Title/Title";
import Text from "../atoms/Text/Text";
import BookingBtn from "../atoms/Button/BookingBtn";
const PlayCard = () => {
  return (
    <div className="bg-black w-[90%] mx-auto p-0.5 rounded-lg">
      <Image
        variant={"rounded"}
        url={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Douglas_Fairbanks_Robin_Hood_1922_film_poster.jpg/220px-Douglas_Fairbanks_Robin_Hood_1922_film_poster.jpg"
        }
        alt={"imagen obra"}
      />

      <div id="body-card" className="px-3 py-1 space-y-2 text-base">
        <Title type={"H2"} variant={"white"} text={"ZONA SALVAJE"} />
        <Title type={"H3"} variant={"orange"} text={"DRIADES"} />
        <Text text={"Sábado, 10 de octubre de 2023"} variant={"white"}/>

import React from 'react'
import Image from '../atoms/Image/Image'
import Title from '../atoms/Title/Title'
import Text from '../atoms/Text/Text'
import BookingBtn from '../atoms/Button/BookingBtn'
import { formatDate } from '../../../utils/formatDate'

const PlayCard = ({play}) => {

  

  const formatedDate = formatDate(play.date)


  return (


      <div className='bg-black w-full mx-auto p-0.5 rounded-lg '> 

      <Image  variant={"imgFilter"} url={play.cartel} alt={"imagen obra"} />

      <div id='body-card' className='px-3 py-1 space-y-2 text-base' >

        <Title type={"H2"} variant={"white"} text={play.title} />
        <Title type={"H3"} variant={"orange"} text={play.company} />
        <Text text={formatedDate} variant={"white"} />


        {/* <div className='flex justify-center'> */}
        <BookingBtn text={"Reservar"} variant={"button-playCard"} url={""} />
        {/* </div> */}

        <div>
          <div className="text-center">
            <Text text={"Más información"} variant={"link"} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default PlayCard;
=======
    
  )
}

export default PlayCard


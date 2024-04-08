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
        <Title type={"H3"} variant={"orange"} text={play.company[0].name} />
        <Text text={formatedDate} variant={"white"} />

        {/* <div className='flex justify-center'> */}
          <BookingBtn text={"Reservar"} variant={"button-playCard"} url={""} />
          
        {/* </div> */}


        <div>

          <div className='text-center' >
          <Text text={"Más información"} variant={"link"} type={'link'} url={`/info/${play._id}`}/>
          </div>

        </div>
      </div>

    </div>
    
  )
}

export default PlayCard
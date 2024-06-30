import React from 'react'
import Icon from "../atoms/Icon/Icon"

const PlayInfoCard = () => {
  return (
    <div className=' p-[25px] mx-5 border rounded-lg border-stone-900 flex-col justify-center items-center gap-2.5'>
        <div className='flex flex-col gap-2'> 
            {/* Ubicacion */}
                <div className=' justify-start items-start gap-[15px] flex'>
                <div className='w-[30px] h-[30px] relative'> <Icon type={"Map"}/> </div>
                <div className=" text-stone-900 text-xl font-bold"> Auditorio Paco de Lucía, Centro de Arte Alcobendas</div> 
        </div>
{/* Fecha */}  
  <div className='justify-start intems-start gap-[15px] flex'>
    <div className='w-[30px] h-[30px] relative'> <Icon type={"Calendar_Yellow"}/> </div>
    <div className="text-stone-900 text-xl font-bold">Viernes 3 de noviembre</div>
  </div>

{/* Hora */}
    
    <div className='flex flex-col'>
      <div className="flex gap-[15px] ">
        <div className='w-[30px] h-[30px] relative '> <Icon type={"Clock"}></Icon></div>
        <div className=" text-lg text-stone-900 font-bold md:text-xl">20:00h</div>
      </div>
      <div className='flex justify-end '>
        <button className=' w-full mt-2 py-2 md:w-[174px] text-center rounded-lg text-stone-900 font-["Cabinet Grotesk"] font-bold text-[28px] bg-orangeDesign'> Reservar </button>
      </div>

    </div>

</div>

</div>



  )
}

export default PlayInfoCard
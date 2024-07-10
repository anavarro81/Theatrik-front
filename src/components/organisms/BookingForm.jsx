import React from 'react'
import Input from '../../components/atoms/Input/Input';
import Title from '../atoms/Title/Title';
import { useForm } from 'react-hook-form';
import Icon from "../atoms/Icon/Icon"
import PlayInfoCard from '../molecules/PlayInfoCard';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate'

const BookingForm = ({play}) => {

  const formatedDate = formatDate(play.date);

  const navigate = useNavigate();


  let url_base = "http://localhost:5002"

  if (import.meta.env.MODE == 'production') {
    url_base = 'https://theatrik.vercel.app/'
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    
    const emailData = {
      tittle: play.title, 
      date: formatedDate,
      place: play.place,  
      company: play.company_name,
      ...data 

    }

    console.log('emailData ', emailData);

    

//    fetch ('http://localhost:5002/mail/sendmail', {
      fetch (`${url_base}/mail/sendmail` ,{

      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 

      body: JSON.stringify(emailData)

    }).then (response => {
      
      console.log('Respuesta el envio: ', response);

      if (response.ok) {
        navigate(`/confirmation/`)
      } else {
        
      }
    })
    
  }


  return (
<form onSubmit={handleSubmit(onSubmit)}>

{/* Formulario */}
<div className='flex w-full space-y-4 flex-col justify-center md:flex  gap-[22px] '> 

{/* Numero de entradas */}
<div className='flex justify-center'> 
  <div className='relative w-[95%] lg:w-full'>

    <label className='absolute -top-3 left-2 bg-white text-lg ' htmlFor="numTickets"> Numero de entradas (*) </label>
    <input 
    className="border p-3 w-full" 
    type="number" 
    name="numTickets" 
    {...register("numTickets", {
      
      required: 'Es obligatio indicar el numero de entradas',    
      min: {
        value: 1,
        message: 'Al menos hay que reservar una entrada'
      },
      max: {
        value: 10,
        message: 'El numero maximo de entradas por personas es de 10'
      }
      
    })}  
    />
  </div>
</div>

{errors.numTickets &&
  <p className='text-red-500'> {errors.numTickets.message} </p>
}


{/* Nombre completo.  */}
<div className='flex justify-center'> 
<div className='relative w-[95%] lg:w-full' >  
  <label className='absolute -top-3 left-2 bg-white text-lg' htmlFor="fullName"> Nombre y apellido (*) </label>
  <input 
  className="border p-3 w-full" 
  type="text" 
  name="fullName"  
  {...register("fullName", {
  
    required: "El nombre y apellido es obligatio",
  
    minLength: {
      value: 10,
      message: 'Al menos debe de tener 10 caracteres'
    },
  })}
  />
</div>
</div>

{errors.fullName &&
  <p className='text-red-500'> {errors.fullName.message} </p>
}


{/* Correo electrónico  */}
<div className='flex justify-center'> 
    <div className='relative w-[95%] lg:w-full'>  
      <label className='absolute -top-3 left-2 bg-white text-lg' htmlFor="email"> Correo electrónico (*) </label>
      <input 
      className="border p-3 w-full" 
      type="email" 
      name="email"  
      {...register("email", {
      
        required: 'Es obligatorio introducir un correo electrónico',
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: 'El formato del correo electronico no es válido'
        }

        })}/>
    </div>
</div>

{errors.email && 
  <p className='text-red-500'> {errors.email.message} </p>
}

{/* Telefono  */}
<div className='flex justify-center'>
    <div className='relative w-[95%] lg:w-full'>  
      <label className='absolute -top-3 left-2 bg-white text-lg' htmlFor="phoneNumber"> Telefono </label>
      <input 
      className="border p-3 w-full" 
      type="tel" 
      name="phoneNumber"  
      {...register("phoneNumber", {
        pattern: {
          value: /^(6|7|9)[0-9]{8}$/,
          message: "El teléfono no es correcto"
        }

    })}/>
    </div>
</div>
{errors.phoneNumber && 
  <p className='text-red-500'> {errors.phoneNumber.message} </p>
}

{/* Comentarios */}
<div className='flex justify-center'>
    <div className='relative w-[95%] lg:w-full'>  
      <label className='absolute -top-3 left-2 bg-white text-lg' htmlFor="comments"> Comentarios </label>
      <input 
      className="border p-3 w-full" 
      type="text" 
      name="comments"  
      {...register("comments", {
        minLength: {
          value: 20,
          message: "Al menos hay que escribir 20 caracteres"
        }

      })}/>
    </div>
</div>
{errors.comments && 
  <p className='text-red-500'> {errors.comments.message} </p>
}



{/* Reserva e info de fecha y lugar */}
  {/* <div className='flex justify-end'>
  <PlayInfoCard play={play} onSubmit={onSubmit}/>
  </div> */}

<div className=" w-[95%] lg:w-full "> 
        
        <div id='placeInfo' className='mt-4 border p-4 rounded-lg shadow-lg '>
              
              {/* Place */ }
              <div id='place' className='flex items-center space-x-2 '>
                <Icon type={"Map"}/>
                <p> {play.place} </p>
              </div>

              {/* Date */}
              <div className='flex items-center space-x-2 my-2 '>
                <Icon type={"Calendar_Yellow"}/>
                <p> {formatedDate} </p>
              </div>

              {/* Time and booking button */ }
              <div className='flex flex-col lg:flex-row lg:justify-between '>
                  
                  <div className='flex items-center space-x-2 my-2 '>
                    <Icon type={"Clock"}/>
                    <p> {play.time} </p>
                  </div>

                  
                  <button 
                  type='submit'
                  className='w-full bg-orangeDesign  text-black font-bold py-2 px-10 rounded-lg inline-block h-[42px] lg:w-auto '
                  
                  > 
                  Reservar
                  
                  </button>
                  
              </div>            
        </div>       
</div>  

{/* Reserva e info de fecha y lugar FIN */}




</div>

</form>

  )
}




export default BookingForm
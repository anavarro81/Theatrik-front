import { BsCheckCircleFill } from 'react-icons/bs';
import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50'>
      <header className='text-lg text-gray-700'>
        <h1 className='text-3xl font-semibold'>¡Gracias por tu solicitud!</h1>
      </header>
      <div className='my-6 text-center'>
        <BsCheckCircleFill className='mx-auto text-6xl text-green-500' />
        <p className='mt-4 text-lg text-gray-600'>Se ha enviado un correo con los datos de esta a la dirección que nos has facilitado. Si no lo ves, por favor, revisa tu carpeta de spam.</p>
        <p className='mt-2 text-lg text-gray-600'>Las entradas no están todavía confirmadas. La asociación se pondrá en contacto contigo lo antes posible para hacerlo.</p>
        <p className='mt-4 font-semibold text-lg text-gray-700'>¡Gracias por venir a la muestra!</p>
      </div>
      {/* <div className='flex flex-col space-y-4'>
        <button className='px-6 py-3 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600'>Ver detalles de la solicitud</button>
        <button className='px-6 py-3 text-gray-700 bg-transparent border-2 border-gray-300 rounded-md shadow hover:border-gray-400'>Enviar un nuevo formulario</button>
      </div> */}
      {/* <div className='mt-8 text-center'>
        <h2 className='text-xl'>¿Necesitas más ayuda?</h2>
        <p className='text-gray-600'>Contacta con nosotros por email o teléfono para consultas urgentes.</p>
      </div> */}
    </div>
  );
};

export default ConfirmationPage;
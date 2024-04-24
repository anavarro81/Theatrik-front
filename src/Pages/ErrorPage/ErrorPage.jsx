import { useRouteError } from "react-router-dom";


import React from 'react'


const ErrorPage = () => {
const error = useRouteError();
console.log(error);
  
return (
    <div id='error-page'>
        <h1> Error </h1>
        <p> Se ha podroducir un error al cargar la página 
            <i> {error.statusText || error.message } </i>
        </p>
    
    </div>
  )
}

export default ErrorPage
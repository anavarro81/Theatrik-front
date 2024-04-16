import React, {useState, useEffect} from "react";
import populate from "../../../../Back/src/api/controllers/company.controllers"

const GenderFilter = () => {
  const [data, setData] = useState([]);


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CompanyComponent() {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/companies'); // Aquí debes poner la ruta correcta de tu endpoint
//         setCompanies(response.data);
//       } catch (error) {
//         console.error('Error al obtener datos de la empresa:', error);
//       }
//     };

//     fetchData();
//   }, []); // El array vacío como segundo argumento asegura que este efecto solo se ejecute una vez, equivalente a componentDidMount en clases

//   return (
//     <div>
//       <h1>Empresas</h1>
//       <ul>
//         {companies.map(company => (
//           <li key={company._id}>{company.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CompanyComponent;

  return (
    <div>
      <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
        Genero
      </p>
      <div className="w-[9rem] h-[37px] mt-3">
        <select
          name="selectedGender"
          defaultValue="orange"
          className="w-full h-full rounded "
        >
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </select>
      </div>
    </div>
  );
};

export default GenderFilter;
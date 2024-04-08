import { useState, useEffect } from "react";
import api from "./index";
import React from "react";

//con .then
// const listCompanies = () => {
//   const [name, setName] = useState([]);

//   useEffect(() => {
//     api.get('/company/getAll').then((res) => {
//       console.log(res.data.name);
//       setName(res.data.name);
//     });
//   }, []);

//   return <div>{name}</div>;
// };

// export default listCompanies;

//con await axios
export const listAsociacion = async () => {
  const { data } = await api.get("/company/getAll", getAllCompanies /*{
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  }*/);

  return data; // trae todos los datos de los usuarios
};
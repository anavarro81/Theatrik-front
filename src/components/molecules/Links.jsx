import React from "react";
import Text from "../atoms/Text/Text";
import classnames from "classnames";

const Links = (text) => {
  // Clase de color para los textos de los meses, es la unica forma que encontre que funciones para cambiar el color de cada enlace
  const colorText = "text-gray-600";

  // //estilos parrafo
  // const parrafo = classnames(
  //   "flex justify-center items-center border rounded w-20 h-8 bg-yellow-400",
  //   {
  //       // Agrega aquí cualquier clase condicional necesaria
  //   }
  // );

  // //estilos contenedor
  // const containerLinks = classnames(
  //   "flex justify-around items-center w-[90%] mx-auto my-1 bg-blue-200"
  // );

  return (
    <div>
      <Text text={"Octubre"} variant={"gray"}></Text>
      <Text text={"Noviembre"} variant={"gray"}></Text>
      <Text text={"Diciembre"} variant={"gray"}></Text>

      <div>
        <p>Links</p>
      </div>
    </div>
  );
};

export default Links;

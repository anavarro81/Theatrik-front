import React from "react";
import Text from "../atoms/Text/Text";
import classnames from "classnames";

const Links = () => {
  // Clase de color para los textos de los meses, es la unica forma que encontre que funciones para cambiar el color de cada enlace
  const colorText = "text-gray-600";

  //estilos parrafo
  const parrafo = classnames(
    "flex justify-center items-center border rounded w-20 h-8 bg-yellow-400",
    {
        // Agrega aquí cualquier clase condicional necesaria
    }
  );

  //estilos contenedor
  const containerLinks = classnames(
    "flex justify-around items-center w-[90%] mx-auto my-1 bg-blue-200"
  );

  return (
    <div className={containerLinks}>
        <Text text={"Octubre"} variant={"link"} colorText={colorText}></Text>
        <Text text={"Noviembre"} variant={"link"} colorText={colorText}></Text>
        <Text text={"Diciembre"} variant={"link"} colorText={colorText}></Text>
      

      <div className={parrafo}>
        <p>Links</p>
      </div>
    </div>
  );
};

export default Links;

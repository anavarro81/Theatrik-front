import React from "react";
import classnames from "classnames";
import BookingBtn from "../../atoms/Button/BookingBtn";
import Icon from "../../atoms/Icon/Icon";

const ContainerSlider = (text, variant, icon) => {
  // Definición de las clases de estilo con Tailwind CSS
  // const containerSliderClasses = classnames(
  //   "w-[98.7vw]", // Ancho de la pantalla para que no tenga  scroll "w-screen" (100vw)
  //   "h-[5vh]", // Altura de la pantalla (en vh)
  //   "mb-[50px]", //margin bottom en px
  //   "border", // Borde
  //   "border-gray-500" // Color del borde (en este caso, gris)
  // );


  const containerSlider = classnames(
    "flex",
    "shadow-md",
    "overflow-hidden",
    "md:flex-shrink-0",
    "font-semibold",
    "m-4",
    "justify-between",
    "rounded-r-md",

  );

  // Devuelve un div con las clases de estilo aplicadas
  return (
    <div className={containerSlider}>
      <a href="#">Todo</a>
      <a href="#">Mes 1</a>
      <a href="#">Mes 2</a>
      <a href="#">Mes 3</a>

      <BookingBtn
        text={"Fecha"}
        variant={"gray"}
        icon={"Calendar"}
        clase={"basic"}
      />
      <BookingBtn
        text={"Genero"}
        variant={"gray"}
        icon={"Genre"}
        clase={"basic"}
      />
      <BookingBtn
        text={"Asociacion"}
        variant={"gray"}
        icon={"Company"}
        clase={"basic"}
      />
    </div>
  );
};

export default ContainerSlider;
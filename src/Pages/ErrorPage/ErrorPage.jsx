import React from "react";
import { useRouteError } from "react-router-dom";
import backgroundImage from "../../components/atoms/Image/bg.png";
import back from "../../components/atoms/Image/Icon.png";

const ErrorPage = () => {
  const error = useRouteError();

  const fontStyles = {
    fontSize: "25px",
    lineHeight: "1.5",
    letterSpacing: "0.5px",
    color: "white",
  };

  console.log(error);

  return (
    <div
      className="error-page bg-red-950 h-screen text-white text-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div style={fontStyles}>
        <h1> Se ha producido un error al cargar la página </h1>

        {error?.status == 404 ? (
          <p> No se ha encontrado la pagina solicitada </p>
        ) : (
          <p> {error?.statusText} </p>
        )}

        <div className="flex flex-col items-center mt-8">
          <a href="http://localhost:5173/">
            <img src={back} alt="Back Icon" className="h-20" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

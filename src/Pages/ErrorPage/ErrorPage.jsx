import React from "react";
import { useRouteError } from "react-router-dom";
import backgroundImage from "../../components/atoms/Image/bg.png";

const ErrorPage = () => {
  const error = useRouteError();

  const fontStyles = {
    fontSize: "20px",
    lineHeight: "1.5",
    letterSpacing: "0.5px",
    color: "#333333",
  };

  console.log(error);

  return (
    <div
      className="error-page bg-white h-screen text-black text-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div style={fontStyles}>
        Error <br /> Se ha producido un error al cargar la página <br />
        <i> {error.statusText || error.message} </i>
      </div>
    </div>
  );
};

export default ErrorPage;

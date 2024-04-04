import React from 'react'

const GenderFilter = () => {


  return (
    <>
      {/* <p className=" text-base font-medium leading-6 text-slate-500 text-justify m-px">
        Genero
      </p> */}

      <label>
        Genero{" "}
      </label>
      <select name="selectedFruit" defaultValue="orange">
        <option value="comedia">Comedia</option>
        <option value="drama">Drama</option>
        <option value="infantil">Infantil</option>
      </select>
    </>
  );
}

export default GenderFilter

// className = "block font-medium leading-6 text-slate-500 mx-0 ";
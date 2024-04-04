import React from 'react'

const GenderFilter = () => {


  return (
    <div>
      {/* <p className=" text-base font-medium leading-6 text-slate-500 text-justify m-px">
        Genero
      </p> */}
      <div className="font-medium leading-6 text-slate-500 h-[2rem] flex items-center justify-center">
        <label>Genero </label>
      </div>
      <select name="selectedFruit" defaultValue="orange">
        <option value="comedia">Comedia</option>
        <option value="drama">Drama</option>
        <option value="infantil">Infantil</option>
      </select>
    </div>
  );
}

export default GenderFilter

// className = "block font-medium leading-6 text-slate-500 mx-0 ";
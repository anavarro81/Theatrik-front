import React from "react";

const GenderFilter = () => {
  return (
    <div>
      {/* <p className=" text-base font-medium leading-6 text-slate-500 text-justify m-px">
        Genero
      </p> */}
      <div className="font-medium text-slate-500 h-[2rem] flex items-center justify-center">
        <label>Genero </label>
      </div>
      <div className="w-[9rem] h-[39px]">
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

// className = "block font-medium leading-6 text-slate-500 mx-0 ";

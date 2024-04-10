import React from "react";

const GenderFilter = () => {
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
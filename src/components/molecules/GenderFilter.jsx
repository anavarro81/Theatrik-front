import React from 'react'

const GenderFilter = () => {


  return (
    <>
      {/* <p className=" text-base font-medium leading-6 text-slate-500 text-justify m-px">
        Genero
      </p> */}

      <label>
        Pick your favorite fruit:
        <select name="selectedFruit" defaultValue="orange">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
    </>
  );
}

export default GenderFilter
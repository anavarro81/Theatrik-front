import React from "react";
import Text from "../atoms/Text/Text";
import classnames from "classnames";
import { usePlays } from "../../Providers/PlaysProvider";
import { useState, useEffect } from "react";

const Links = () => {
  const textLink = classnames(
    "flex items-center h-7 mt-1.5 mr-1.5 text-sm md:ml-10"
  );

  const { plays, getPlays, mesfinalAño } = usePlays();

  const handleMonth = (str) => {
    mesfinalAño(str);

  };

  useEffect(() => {
    getPlays();
  }, []);

  // console.log("plays en links: ", plays);

  return (
    <div className="flex">
      <div className={textLink}>
        <p onClick={() => handleMonth("9")}>Octubre</p>
      </div>

      <div className={textLink}>
        <p onClick={() => handleMonth("10")}>Noviembre</p>
      </div>

      <div className={textLink}>
        <p onClick={() => handleMonth("11")}>Diciembre</p>
      </div>
    </div>
  );
};

export default Links;
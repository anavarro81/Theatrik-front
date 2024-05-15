import React from "react";
import Text from "../atoms/Text/Text";
import classnames from "classnames";
import { usePlays } from "../../Providers/PlaysProvider";
import { useState, useEffect } from "react";

const Links = () => {
  const textLink = classnames(
    "flex items-center h-7 mt-1.5 mr-1.5 text-sm md:ml-10"
  );
  const { plays, getPlays } = usePlays();
  const [month, setMonth] = useState(null);

  const handleMonth = () => {
    const result = plays.filter((play) => play.date);
    console.log("res:", result);
  };

  useEffect(() => {
    getPlays();
  }, []);

  // console.log("plays en links: ", plays);

  return (
    <div className="flex">
      <div className={textLink} onClick={() => handleMonth("October")}>
        <Text text={"Octubre"} variant={"gray"} type={"link"}></Text>
      </div>

      <div className={textLink} onClick={handleMonth}>
        <Text text={"Noviembre"} variant={"gray"} type={"link"}></Text>
      </div>

      <div className={textLink} onClick={handleMonth}>
        <Text text={"Diciembre"} variant={"gray"} type={"link"}></Text>
      </div>
    </div>
  );
};

export default Links;

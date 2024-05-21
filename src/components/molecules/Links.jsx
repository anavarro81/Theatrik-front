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

  const handleMonth = (str) => {
    const date = new Date();
    const month = date.getUTCMonth();
    return month === 9 || month === 10 || month === 11; // Octubre (9), Noviembre (10), Diciembre (11)
  };

  useEffect(() => {
    getPlays();
  }, []);

  console.log("plays en links: ", plays);

  return (
    <div className="flex">
      <div className={textLink}>
        <a href="https://www.mozilla.org/es-ES/" onClick={() => handleMonth("9")}>
        <Text text={"Octubre"} variant={"gray"} type={"link"}></Text>
        </a>
      </div>

      <div className={textLink}>
        <a href="https://www.mozilla.org/es-ES/" onClick={() => handleMonth("10")}>
        <Text text={"Noviembre"} variant={"gray"} type={"link"}></Text>
        </a>
      </div>

      <div className={textLink}>
        <a href="https://www.mozilla.org/es-ES/" onClick={() => handleMonth("11")}>
        <Text text={"Diciembre"} variant={"gray"} type={"link"}></Text>
        </a>
      </div>
    </div>
  );
};

export default Links;
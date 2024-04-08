import React from "react";
import Text from "../atoms/Text/Text";
import classnames from "classnames";
import classNames from "classnames";

const Links = (text) => {

  const textLink = classnames(
    "flex justify-around items-center border rounded h-8 bg-yellow-400 "
  );

  const styleLinks = classnames(
    "flex justify-center items-center border rounded w-20 h-6  bg-yellow-400"
  );

  return (
    <div className="flex justify-around mb-4 h-6">
      
      <div>
        <Text text={"Octubre"} variant={"gray"} type={"link"} ></Text>
      </div>
      <div>
        <Text text={"Diciembre"} variant={"gray"} type={"link"} className={textLink}></Text>
      </div>
      <div>
        <Text text={"Noviembre"} variant={"gray"} type={"link"} className={textLink}></Text>
      </div>
    
      <div className={styleLinks}>
        <label>Links</label>
      </div>

    </div>
  );
};

export default Links;

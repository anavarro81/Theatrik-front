// import React from "react";
// import Text from "../atoms/Text/Text";
// import classnames from "classnames";

// const Links = (text) => {

//   const textLink = classnames(
//     "flex justify-around items-center border rounded h-8 bg-yellow-400 "
//   );

//   const styleLinks = classnames(
//     "flex justify-center items-center border rounded w-20 h-6  bg-yellow-400"
//   );

//   return (
//     <div className="flex justify-start ml-4 mb-4 h-6">
//       <div>
//         <Text text={"Octubre"} variant={"gray"} type={"link"}></Text>
//       </div>
//         <Text
//           text={"Noviembre"}
//           variant={"gray"}
//           type={"link"}
//           className={textLink}
//         ></Text>
//       <div>
//         <Text
//           text={"Diciembre"}
//           variant={"gray"}
//           type={"link"}
//           className={textLink}
//         ></Text>
//       </div>
//       <div>
//       </div>

//       <div className={styleLinks}>
//         <label>Links</label>
//       </div>
//     </div>
//   );
// };

// export default Links;
// flex justify-start ml-4 mb-4 h-6

import React from "react";
import Text from "../atoms/Text/Text";
import classnames from "classnames";

const Links = () => {
  const textLink = classnames("flex items-center h-7 mt-1.5 mr-1.5 text-sm md:ml-10");

  return (
    <div className="flex">
      <div className={textLink}>
        <Text text={"Octubre"} variant={"gray"} type={"link"}></Text>
      </div>

      <div className={textLink}>
        <Text text={"Noviembre"} variant={"gray"} type={"link"}></Text>
      </div>

      <div className={textLink}>
        <Text text={"Diciembre"} variant={"gray"} type={"link"}></Text>
      </div>
    </div>
  );
};

export default Links;

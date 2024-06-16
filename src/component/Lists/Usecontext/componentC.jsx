import React, { useContext } from "react";
import ComponentD from "./componentD";
import { UserContext } from "./ComponentA";
function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="container_box">
      <h5>componentC</h5>
      <p>{`Hello agin ${user}  `}</p>
      <ComponentD />
    </div>
  );
}
export default ComponentC;

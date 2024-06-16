import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="container_box">
      <h5>componentD</h5>
      <p>{` bye ${user} `}</p>
      
    </div>
  );
}
export default ComponentD;

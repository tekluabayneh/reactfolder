import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext(); // this is a function

function ComponentA() {
  const [name, setname] = useState("Teklu");
  return (
    <div className="container_box">

      <h5>componentA</h5>

      <p>{`Hello ${name}`}</p>

      <UserContext.Provider value={name}>

        <ComponentB name={name} age="12" />

      </UserContext.Provider>
      
    </div>
  );
}
export default ComponentA;


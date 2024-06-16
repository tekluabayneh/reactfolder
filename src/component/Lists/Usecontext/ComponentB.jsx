import React, { useContext } from "react";
import ComponentC from "./componentC";

import { UserContext } from "./ComponentA";

function ComponentB() {
  const usecontxtt = useContext(UserContext);

  return (
    <div className="container_box">
      <h5>componentB </h5>
      <p>{usecontxtt}</p>

      <ComponentC />
    </div>
  );
}
export default ComponentB;

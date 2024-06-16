import React, { useState } from "react";
import Uselocalstarage from "./Custom-subchild";

function Customuse() {
  const [name, setname] = Uselocalstarage("name", () => "");
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
    </div>
  );
}
export default Customuse;

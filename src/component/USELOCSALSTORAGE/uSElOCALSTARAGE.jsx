import React, { useState } from "react";

function Localstarage() {
  const [name, setname] = useState("");

  function Hnadleer() {
    setname("");
  }
  return (
    <div className="Localstorage-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br></br>
      {/*       <p style={{ color: "white" }}>{name}</p>
       */}{" "}
      <div>
        <button className="btn" onClick={() => Hnadleer()}>
          Set
        </button>
        <button className="btn" onClick={() => Hnadleer()}>
          Get
        </button>
        <button className="btn" onClick={() => Hnadleer()}>
          Remove
        </button>
      </div>
    </div>
  );
}
export default Localstarage;

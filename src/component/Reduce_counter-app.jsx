import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("opps error ocure");
  }
}

function Reducerapp() {

  const [state, dispatch] = useReducer(reducer, 0);

  

  return (

    <div>

      <h1>{state}</h1>

      <button
        style={{ padding: "12px", margin: "5px" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>

      <button
        style={{ padding: "12px", margin: "5px" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>


    </div>
  );
}
export default Reducerapp;

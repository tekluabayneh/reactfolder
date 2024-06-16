import React, { memo, useMemo, useReducer, useState } from "react";

function erducer(state, action) {
  console.log("reducer");
  switch (action) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "Togggle_Admin":
      return { ...state, isAdmin: state.isAdmin - 1 };
  }
}



let Globalecount = 0;
function Srecitmodee() {
  const [count, setcount] = useState(0);
  const [state, dispatch] = useReducer(erducer, { count: 0, isAdmin: false });
  const doubledcount = useMemo(() => {
    console.log("memo");
    return count + 2;
  }, [count]);
  return (
    <div>                                                    
      <button
        style={{ padding: "5px" }}
        onClick={() =>
          setcount((count) => {
            console.log("state");
            Globalecount = Globalecount + 1;

            return count + 1;
          })
        }
      >
        {count} * 2 = {doubledcount}
      </button>
      <br></br>
      Reducer:
      <button style={{ padding: "5px" }} onClick={() => dispatch("INCREMENT")}>
        {state.count}
      </button>
      <br></br>
      isAdmin:
      <button
        style={{ padding: "5px" }}
        onClick={() => dispatch("Togggle_Admin")}
      >
        {state.isAdmin.toString()}
      </button>
      <br></br>
      Globale:
      {Globalecount}
    </div>
  );
}
export default Srecitmodee;

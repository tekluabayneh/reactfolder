// useCallback is a hook provided by React that is used for performance optimization, especially when dealing with functions that are passed as props to child components.
import React, { useCallback, useMemo, useState } from "react";
import Getitems from "./Callback_subchild";

function Callback() {
  const [number, setnumber] = useState(1);
  const [Dark, setDark] = useState(false);

  const getitem = useCallback(() => {
    return [number , number + 1 , number + 2 ];
  }, [number]);

 

  const themestyle = {
    backgroundColor: Dark ? "black" : "white",
    color: Dark ? "white" : "black",
  }; 

  return (
    <div>
      <div style={themestyle}>
        <input
          type="number"
          value={number}
          onChange={(e) => setnumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((precolor) => !precolor)}>
          increment
        </button>
        <br></br>
        
        <Getitems getitems={getitem} />

      </div>
    </div>
  );
}
export default Callback;

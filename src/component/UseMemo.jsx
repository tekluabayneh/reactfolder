// n React, a "memo" is a higher-order component (HOC) used for optimizing the performance of functional components by preventing unnecessary re-renders. When a component is wrapped with the memo HOC, React memoizes the component, meaning it remembers the last rendered result and reuses it when the component renders with the same props.
import React, { useEffect, useMemo, useRef, useState } from "react";

function USEMemo() {
  const [number, setnumber] = useState(0);
  const [Dark, setDark] = useState(false);

  const doublenmber = useMemo(() => {
    // to stop anneccery re-render we will use like this
    return slowfunction(number);
  }, [number]);

  //const doublenmber = slowfunction(number);// if we just leave it like this it will mak eit slow

  const themestyle = {
    backgroundColor: Dark ? "black" : "white",
    color: Dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setnumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((perevDark) => !perevDark)}>
        Chnage theme
      </button>
      <div style={themestyle}>{doublenmber}</div>
    </div>
  );
}
function slowfunction(num) {
  console.log("calling slaow function");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
export default USEMemo;

// // useRef is a React hook that provides a way to create a mutable reference that persists across renders. It is commonly used for accessing and interacting with DOM elements directly, storing mutable values that don't trigger re-renders when updated, and preserving values across re-renders without causing re-renders.

// import React, { useEffect, useRef, useState } from "react";

// function UseReff() {
//   const [inputvalue, setinputvalue] = useState("");
//   const inputRef = React.useRef(0);

//   useEffect(() => {
//     inputRef.current = inputRef.current + 1;

//     //inputRef.current.focus(); //this can help  to focus the input
//   });

//   /*   function Hnadelchnage(e) {
//     setinputvalue(e.target.value);
//     console.log("input chnage");
//   } */

//   return (
//     <div>
//       <h1>My Name is {inputvalue}</h1> <br></br>
//       <input
//         // ref={inputRef}// this is selecting FOMElement directly useing UseRef Hook
//         type="text"
//         value={inputvalue}
//         onChange={(e) => setinputvalue(e.target.value)}

//         /*  onChange={Hnadelchnage} */
//       />
//       <h1>I Render {inputRef.current} Count</h1>
//     </div>
//   );
// }
// export default UseReff;

import React, { useEffect, useReducer, useRef, useState } from "react";

function UseReff() {
  const [name, setname] = useState(() => {
    return "";
  });

  const perevvalue = useRef("");

  useEffect(() => {
    perevvalue.current = name;
    // perevvalue.current = perevvalue.current + 1 // we do this to uodate number
  }, [name]);

  return (
    <div>
      <input
        type="text"
        //ref={teklu}// this is  how we can interact with the don directly

        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <h3>
        my name is {name} and it used to be {perevvalue.current}
      </h3>
    </div>
  );
}
export default UseReff;

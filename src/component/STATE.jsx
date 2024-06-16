// In React, "state" refers to the internal data held by a component. It represents the current condition of the component and can be modified over time, usually as a result of user actions or other events.

import React, { useState } from "react";

/* function named() {
  // doing  this will render thing over and over agian
  console.log("btn click");
  return 0;
}  */
function SteteCounter() {
  const [counter, setcounter] = useState(() => {
    return 0; //by doing this we can top ovliding over and over
  });

  const [count, setcount] = useState(0);
  const [theme, settheme] = useState("blue");

  /*   const [countnum, setcount2] = useState({ count2: 0, theme: "red" });
  const count2 = countnum.count2;
  const theme = countnum.theme; */

  /*   const [count, setcount] = useState(named()); */ // this is nad practice to do caling fynction

  function Handelcounter() {
    /*     setcount(count + 1);// doing  this also make it bad
     */
    setcount((prevvalue) => prevvalue - 1); // doing this can help to do thing duble
    setcount((prevvalue) => prevvalue - 1); // this one is a good practice
    settheme("blue");
    /* setcount2((prevvalue) =>{
      return {...prevvalue, count2: prevvalue.count2 -1}// this is just to murge tow thing in one 
    }) */
  }

  function Handelcounterw() {
    /*     setcount(count - 1);
     */ setcount((prevvalue) => prevvalue + 1);
    settheme("red");
  }
  return (
    <div>
      <h1></h1>
      <button
        onClick={Handelcounter}
        style={{ padding: "2rem", display: "inline" }}
      >
        -
      </button>
      <p>
        {count}
        {theme}
      </p>
      <button
        onClick={Handelcounterw}
        style={{ padding: "2rem", display: "inline" }}
      >
        +
      </button>
    </div>
  );
}
export default SteteCounter;

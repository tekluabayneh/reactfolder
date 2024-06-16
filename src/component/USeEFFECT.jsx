// // The useEffect Hook allows you to perform side effects in your components.

// // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// import React, { useEffect, useState } from "react";

// function UseState() {
//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     let leakavoid = setInterval(() => {
//       setcount((count) => count + 1);
//     }, 100);
//     return () => clearTimeout(leakavoid); // by doing this we can avoid memory leak
//   }, []);
//   return (
//     <div>
//       <h1>useState</h1>

//       <p>i have rendered {count} count</p>

//     </div>
//   );
// }
// export default UseState;

// // useEffect(() => { fetching Data
// //   async function fetchData() {
// //     const response = await fetch('https://api.example.com/data');
// //     const data = await response.json();
// //     // Set state with fetched data
// //   }
// //   fetchData();
// // }, []); // Empty dependency array means this runs once on mount

import React, { useEffect, useState } from "react";

function UseState() {
  const [changevalue, setchangevalue] = useState("Post");
  const [windowWidth, setwindowWidth] = useState(window.innerWidth); // this is how we can know the window width and modify thing using window width

  // thid is for the windpw one

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // by doing this we can stop re-rendering thing and thing thing will render first before the ather get render
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setwindowWidth(window.innerWidth);
  }
  //until this

  const [jsoncount, setjsoncount] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      /*       .then((json) => console.log(json))
       */ .then((json) => setjsoncount(json));
  }, []);

  return (
    <div>
      <h1>{windowWidth}</h1>
      <button
        style={{ padding: "12px", margin: "5px" }}
        onClick={() => setchangevalue("post")}
      >
        post
      </button>
      <button
        style={{ padding: "12px", margin: "5px" }}
        onClick={() => setchangevalue("user")}
      >
        user
      </button>
      <button
        style={{
          padding: "12px",
          margin: "5px",
          position: "absolute",
          top: "2rem",
        }}
        onClick={() => setchangevalue("Blods")}
      >
        Blogs
      </button>
      <h1>{changevalue}</h1>
      <h1>
        {jsoncount.map((item) => {
          return (
            <p
              style={{
                fontSize: "10px",
                padding: "12px ",
              }}
            >
              {JSON.stringify(item)}
            </p>
          );
        })}
      </h1>
    </div>
  );
}
export default UseState;

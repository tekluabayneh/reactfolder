// Jsx make code esier to read and eliquent
// using jsx we can  modify easly

// the most important of using jx is to write less code which means they make leass mistake and are less likly to devlop repetetive-stress injure

import React from "react";

function Jsx() {
  const Haneexlclick = () => {
    const Names = ["teklu", "kidus", "sami"];
    const init = Math.floor(Math.random() * 3.3);
    return Names[init];
  };

  return (
    <div>
      <h1>Hello {Haneexlclick()}</h1>
    </div>
  );
}
export default Jsx;



// function getGreeting(user) { this is also jsx syntax
//   if (user) {
//     return <h1>Hello, {user}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const isLoggedIn = true; this is also jsx syntax
// const element = isLoggedIn ? <Dashboard /> : <Login />;



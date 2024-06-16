// // In React, context is a way to share state between components without passing props down manually. It's like a global store that components can access and update.

import React, { createContext, useContext, useState } from "react";

export const Context = React.createContext();

function ThemeProvider() {
  const [Signin, setSignin] = useState(false);

  return (
    <Context.Provider value={[Signin, setSignin]}>

      <h1>{Signin ? "Sign-out" : "Sign-in"}</h1>

      <button onClick={() => setSignin(!Signin)}>Toggle</button>
    </Context.Provider>
    
  );
}

export default ThemeProvider;


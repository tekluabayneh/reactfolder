import React, { useContext, useState } from "react";
import ThemeProvider from "./component/USECONTEXT";
import { Context } from "./component/USECONTEXT";
function Logchecker() {
  /*   const [Signin1, setSignin1] = useContext(Context);
   */ const [Signin, setSignin] = useState(true);
  return (
    <div>
      <button onClick={() => setSignin(!Signin)}>
        {Signin ? "Sign-in" : "Sign-out"}
      </button>
      <br></br>
      <ThemeProvider />
    </div>
  );
}
export default Logchecker;

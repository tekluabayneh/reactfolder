import React from "react";

function Conditional() {
  let isloged = false;

  return (
    <div>
      <h1>
        {isloged ? (
          <p>the user has account</p>
        ) : (
          <p>the user need to have an acount</p>
        )}
      </h1>
    </div>
  );
}
export default Conditional;

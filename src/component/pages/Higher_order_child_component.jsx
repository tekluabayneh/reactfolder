/* import React from "react";

const USER = (props) => {
  const userinfo = {
    name: "John Doe",
    email: "john@gamil.come",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "3rem",
        display: "flex",
        backgroundClip: "black",
        color: "white",
      }}
    >
      <h1>User info</h1>
      <p>name : {userinfo.name}</p>
      <p>email : {userinfo.email}</p>
    </div>
  );
};

export default USER;
 */
import React from "react";
import UpdatedComponent from "./Haigher_Order_Component";
function Persone1({ Money, ClickHandler }) {
  return (
    <>
      <p>persone one salary was 10$ per monthe now its {Money}</p>
      <button onClick={ClickHandler}>increase</button>
    </>
  );
}
export default UpdatedComponent(Persone1);

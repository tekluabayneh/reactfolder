import React from "react";
import From from "./EVENTFORM";
function Event() {
  function Handelclick() {
    console.log("btn clicked");
  }
  function HandelSubmti() {
    console.log("btn clicked");
    alert("fddfdfdfdfdfdfd");
  }

  /* function Onchanged(e) {
    console.log(e.target.value);
  }
 */
  return (
    <div>
      <h1>Event</h1>

      <button onClick={Handelclick}>click</button>
      <From onSubmit={HandelSubmti} />
    </div>
  );
}
export default Event;

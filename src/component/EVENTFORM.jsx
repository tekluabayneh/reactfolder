import React from "react";

function From({ onSubmit }) {
  function HandelSubmti(e) {
    onSubmit();
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <button type="submit">click</button>
      </form>
      
    </>
  );
}
export default From;


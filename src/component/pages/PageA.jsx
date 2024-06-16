import React from "react";
import { useParams } from "react-router-dom";
function PageA() {
  const { id } = useParams();
  return (
    <div>
      <h1>Pages A :{`this is the param method ${id}`}</h1>

      <button>get {id}</button>
      <button>set</button>
      <button>Remove</button>
    </div>
  ); 
}
export default PageA;

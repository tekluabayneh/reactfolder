import React from "react";
function Model1({ open, childern, onclose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div>this this for the big z-index backgorund</div>
      <button></button>
      {childern}
    </>,
    document.getElementById("root")
  );
}
export default Model1


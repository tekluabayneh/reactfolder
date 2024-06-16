// Modal.js

import ReactDOM, { createPortal } from "react-dom";

const MODEL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "2rem",
  zIndex: 1000,
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0  Apx 10px rgba(0,0,0,0.2)",
};
const OVERLAY_STYLE = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 1000,
};

function Modal({ open, children, onclouse }) {
  
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLE}> </div>
      <div style={MODEL_STYLE}>
        <button onClick={onclouse}>Close Modal</button>
        {children}
      </div>
    </>,

    document.getElementById("portal")
  );
}

export default Modal;

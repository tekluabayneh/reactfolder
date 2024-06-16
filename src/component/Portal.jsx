// App.js
import React, { useState } from "react";
import { Suspense } from "react";

import Modal from "./Portal_model";

const BUTTON_WRAPPER_STYLE = {
  position: "relative",
  zIndex: 1,
};
const OTHER_CONTENT_STYLE = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "0.4rem",
};

function Parent_portal() {
  const [Isopen, setIsopen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLE}>
        <button onClick={() => setIsopen(true)}>Open Modal</button>

        <Modal open={Isopen} onclouse={() => setIsopen(false)}>
          <h3>welcome</h3>
          <p>
            this is the moment you want to see b or get the last number to have
            the access
          </p>
        </Modal>

      </div>
      <div style={OTHER_CONTENT_STYLE}>OTHER CONTENT </div>
    </>
  );
}

export default Parent_portal;

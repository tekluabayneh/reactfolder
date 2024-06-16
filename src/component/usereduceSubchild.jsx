import React from "react";
import ACTION from "./USEREDUCER";
function UsereduceSubchild({ todos, dispatch }) {
  return (
    <div>
      <span
        style={{
          color: todos.complete ? "green" : "red",
          margin: "20px",

          display: "flex",
          flexDirection: "column",
          columnGap: "0.3rem",
        }}
      >
        {todos.name}

        <button
          onClick={() =>
            dispatch({
              type: ACTION.TOGGLE_TODOS,
              paylaode: { id: todos.id },
            })
          }
        >
          Toggle
        </button>

        <button
          onClick={() =>
            dispatch({
              type: ACTION.DELETE_TODOS,
              payloade: { id: todos.id },
            })
          }
        >
          Delete
        </button>
      </span>
    </div>
  );
}

export default UsereduceSubchild;

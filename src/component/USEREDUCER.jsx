// import React, { useReducer, useState } from "react";

// const ACTION = {
//   INCEMENT: "increment",
//   DICREMENT: "decrement",
// };
// function render(state, action) {
//   //   return { count: state.count + 1 };

//   switch (action.type) {
//     case ACTION.INCEMENT:
//       // case "increment":
//       return { count: state.count + 1 };

//     case ACTION.DICREMENT:
//       // case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// function Resducercounter() {
//   const [state, dipsatch] = useReducer(render, { count: 0 });

//   function increment() {
//     dipsatch({ type: ACTION.INCEMENT });
//     // dipsatch({ type: "decrement" });
//   }
//   function decrement() {
//     dipsatch({ type: ACTION.DICREMENT });
//     // dipsatch({ type: "increment"});
//   }

//   const styled = {
//     padding: "12px",
//     margin: "4px",
//   };

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => increment()} style={styled}>
//         +
//       </button>
//       <button onClick={() => decrement()} style={styled}>
//         -
//       </button>
//     </div>
//   );
// }
// export default Resducercounter;

import React, { useReducer, useState } from "react";
import UsereduceSubchild from "./usereduceSubchild";

export const ACTION = {
  ADD_TODO: "add_todo",
  TOGGLE_TODOS: "toggle_todo",
  DELETE_TODOS: "DELETE_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newtodos(action.paylaode.name)];
    case ACTION.TOGGLE_TODOS:
      return todos.map((todo) => {
        if (todo.id === action.paylaode.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case ACTION.DELETE_TODOS:
      return todos.filter((todo) => todo.id !== action.paylaode.id);
  }
}

function newtodos(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Resducercounter() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setname] = useState("");

  /*   const [todos, settodos] = useState([]);
   */ function handlchnage(e) {
    console.log("this is the btn click");
    setname(e.target.value);
  }

  function onsubmithandeler(e) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, paylaode: { name: name } });
    setname("");
  }
  console.log(todos);

  return (
    <div>
      <form onSubmit={onsubmithandeler}>
        <h1>{name}</h1>
        <input type="text" value={name} onChange={handlchnage} />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todos, index) => {
        return (
          <UsereduceSubchild
            index={todos.id}
            todos={todos}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}
export default Resducercounter;

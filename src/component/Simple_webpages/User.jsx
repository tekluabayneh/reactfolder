import React from "react";
import { Link, NavLink } from "react-router-dom";

const USERS = {
  1: { id: 1, name: "John Doe" },
  2: { id: 2, name: "Kidus Yoseph" },
  3: { id: 2, name: "Teklu Abay" },
};

const users = (props) => {
  if (USERS.length === 0) {
    throw new Error("user is not definde");
  }
  return (
    <div>
      <h2>USERS</h2>
      {USERS.map((user) => {
        return (
          <NavLink to={`/user/${user.name}`} key={user.id}>
            {USERS.name}
          </NavLink>
        );
      })}
    </div>
  );
};
export default users;

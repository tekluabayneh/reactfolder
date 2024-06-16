import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function PageC() {
  const params = useParams();
  const userId = params.id;
  return (
    <>
      <div>
        <h1>Pages C</h1>
        <Outlet />
      </div>
      <br></br>

      <hr></hr>
      <div>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            columnGap: "2rem",
          }}
        >
          <Link to="PageC">pageC</Link>
          <Link to="PageD">pageD</Link>
          <p>User ID: {userId}</p>
        </nav>
      </div>
    </>
  );
}

export default PageC;

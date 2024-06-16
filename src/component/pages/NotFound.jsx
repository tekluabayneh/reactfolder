import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Pagenotfound() {
  const Location = useLocation();


  const navigator = useNavigate(); // this is used to naigate to the Home page it the user miss speill word

  useEffect(() => {
    setTimeout(() => {
      navigator("/"); // this will direct the to home page
      // navigator(-1); // one back whre it was
      //  navigator(-2); // back tow time
    }, 1000);
  }, []);
  
  return (
    <div>
      <h1 style={{ color: "red" }}>Page..Not Found..</h1>
      <p>plase provide more Https</p>
      <p>{Location.state}</p>
      <nav>
        <Link to="PageC">pageC</Link>

        <NavLink to="PageD" state="Teklu hi man">
          {" "}
          {/*  to usee state like this we need to use uselaocation method */}
          pageD
        </NavLink>
        
      </nav>
    </div>
  );
}
export default Pagenotfound;

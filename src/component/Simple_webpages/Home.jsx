import React from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Errorboundary from "./ErrorBoundary";
const Home = React.lazy(() => import("./Home"));
const Aboutpage = React.lazy(() => import("./About"));
const User = React.lazy(() => import("./User"));
const Contactus = React.lazy(() => import("./contuctus"));

function RoutingwithREactError() {
  return (
    <>
      {/* <Errorboundary> */}
      <div
        style={{
          width: "100%",
          height: "5rem",
          display: "flex",
          rowGap: "1rem",
          boxShadow: "0 0 10px black",
          color: "red",
          justifyContent: "space-around",
          padding: "1rem",
        }}
      >
        <nav>
          <Link to="Home">Home</Link>
        </nav>
        <nav>
          <Link to="Aboutpage">Aboutpage</Link>
        </nav>
        <nav>
          <Link to="User">User</Link>
        </nav>
        <nav>
          <Link to="Contactus">Contactus</Link>
        </nav>
        <nav>
          <Link to="Aboutpage">Aboutpage</Link>
        </nav>
      </div>
      {/*  </Errorboundary>
       */}
      <Errorboundary>
        <Routes>
          <Route path="/" component={<Home />}>
            <Home />
          </Route>
          <Route path="/Home" component={<Home />}>
            <Home />
          </Route>
          <Route
            path="/Aboutpage"
            component={
              <React.Suspense fallback={"Loading..."}>
                <Aboutpage />
              </React.Suspense>
            }
          >
            <Aboutpage />
          </Route>
          <Route
            path="/User"
            component={
              <React.Suspense fallback={"Loading..."}>
                <User />
              </React.Suspense>
            }
          >
            <Home />
          </Route>
          <Route
            path="/Contactus"
            component={
              <React.Suspense fallback={"Loading..."}>
                <Contactus />
              </React.Suspense>
            }
          >
            <Home />
          </Route>
          <Route path="*" navigate to="/Home"></Route>
        </Routes>
      </Errorboundary>
    </>
  );
}

export default RoutingwithREactError;

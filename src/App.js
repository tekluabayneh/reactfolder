import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Jsx from "./component/JSX";
import PROPS from "./component/PROPS";
import Student_Props from "./component/PROPS";
import SteteCounter from "./component/STATE";
import Event from "./component/EVENT";
import UseState from "./component/USeEFFECT";
import Srecitmodee from "./component/STRICTMODE";
import Conditional from "./component/Lists/Conditional Rendering";
import UseReff from "./component/USERef";
import USEMemo from "./component/UseMemo";
import Onlymemo from "./component/MEMO";
import Callback from "./component/Callback";
import Customuse from "./component/Custom-Hook";
import Resducercounter from "./component/USEREDUCER";
import Reducerapp from "./component/Reduce_counter-app";
import Logchecker from "./USECONTEXTLOG-APP";
import ComponentA from "./component/Lists/Usecontext/ComponentA";
import Localstarage from "./component/USELOCSALSTORAGE/uSElOCALSTARAGE";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import PageA from "./component/pages/PageA";
import PageB from "./component/pages/Page.B";
import PageC from "./component/pages/PageC";
import PageD from "./component/pages/PageD";
import PageE from "./component/pages/PageE";
import NotFound from "./component/pages/NotFound";
import ChildA from "./component/pages/pageC_chilsA";
import "./component/pages/pages.css";
import Parent_portal from "./component/Portal";
import ArtistPage from "./component/Suspense_main";
import TekluErroboundary from "./component/React_Error_boundary.jsx";
import RoutingwithREactError from "./component/Simple_webpages/Home.jsx";
import WithLoading from "./component/pages/Haigher_Order_Component.jsx";
import UserwithLoadermother from "./component/pages/Higher_Horder_mother.jsx";
import Persone1 from "./component/pages/Higher_order_child_component.jsx";
import Persone2 from "./component/pages/Higher_Horder_mother.jsx";
import DataFetcherlifecyclemethod from "./LifeCycle_method.jsx";
function App() {
  // this is for the btn
  /*  function btnclicked() {
    console.log("btn click");
  }  */
  /* const [show, setShow] = useState(false); */
  return (
    <div className="App">
      <DataFetcherlifecyclemethod />{" "}
      {/* 
      <Persone1 />
      <Persone2 /> */}
      {/*       <UserwithLoadermother />
       */}
      {/*  <RoutingwithREactError /> */}
      {/*       <TekluErroboundary />
       */}{" "}
      {/* {<ArtistPage />} */}
      {/* <Parent_portal /> */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/*  <nav>
        <ul
          style={{
            padding: "7px",
            display: "flex",
            columnGap: "1rem",
            padding: "1.4rem",
            width: "100%",
            boxShadow: "0 0 10px black",
          }}
        >
          <Link to="/" className="active">
            pageA
          </Link> */}
      {/* 
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : {};
            }}
            to="/"
          >
            {({ isActive }) => {
              return isActive ? "home is active" : "home";
            }}
          </NavLink> */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/*             pageA
       */}
      {/*              if we wan to have the isActive we dont write the page nam like this
       */}
      {/* AFTER THIS ONE IS ANOTHER */}
      {/*   <Link to="/" reloadDocument>
            pageA{" "}
          </Link> */}
      {/* this is the relode method it relode the entiere web page */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/*   <Link to="/" replace>
            pageA{" "}
          </Link> */}
      {/* the  replace method can go back tow times when we click it bck button*/}
      {/* 
          <Link to="PageB">pageB</Link>
          <Link to="PageC">pageC</Link>
          <Link to="PageD">pageD</Link>
          <Link to="PageE">pageE</Link>
          <Link to="NotFound">pagenotfound</Link>
          <Link to="pageC_chils">pageC_chils</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/PageB" element={<PageB />} />
        {<Route path="/PageC" element={<PageC />} />}
        <Route path="/PageD" element={<PageD />} />
        <Route path="/PageE" element={<PageE />} />
        <Route path="*" exact element={<NotFound />} />
        <Route path="/pageC">
          <Route path="pageC_chils" element={<ChildA />} />
        </Route>
        <Route path="/pageC">
          <Route path=":id" element={<ChildA />} />
          <Route path="new" element={<ChildA />} />
        </Route>
        <Route path="/pageC_chils/:id" element={<ChildA />} /> */}
      {/* if we  give it like this id it means evry thing that has id or number get render the in that page */}
      {/*  </Routes> */}
      {/*}
/////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/* Routing part */}
      {/*       <Localstarage />
       */}
      {/*  <ComponentA />
      <Logchecker /> */}
      {/* 
      {<Reducerapp />}
      <Resducercounter />
      <Customuse />

      <Callback />

      <Onlymemo />

      <USEMemo />

      <UseReff />
      <Conditional />
      <Srecitmodee />
      <UseState />

      <Event /> */}
      {/*   <SteteCounter /> */}
      {/* THIS IS ALLABOUT STATE UNTILL THIS  */}
      {/*   <Student_Props name="Teklu" age={18} isstudent={true} />
      <Student_Props name="Kidus" age={91} isstudent={false} />
      <Student_Props name="Ysma" age={9} isstudent={true} />
      <Student_Props name="Juni" age={57} isstudent={false} />
      <Student_Props /> */}
      {/* this is for to use the default value */}
      {/*  <PROPS name="teklu" age="18" btnclick={btnclicked} /> */}
      {/* ==============================================================================================
                                   until this is all about props
=================================================================================================*/}
      {/*   <Jsx/> */}
    </div>
  );
}

export default App;

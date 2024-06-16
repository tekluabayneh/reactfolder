// import React, { Suspense } from "react";
// import { useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";

// // // import About from "./Suspense_aboutpage";

// const About = React.lazy(() => import("./Suspense_aboutpage"));
// export default function ArtistPage() {
//   // const [show, setshow] = useState()
//   return (
//     <>
//       <h1>the</h1>

//       <React.Suspense fallback={<Loading />}>
//         <h1>this is the main component</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
//           iure, odio alias omnis veritatis accusantium, repellendus aliquam
//           illum adipisci molestiae voluptates dolores aut, molestias libero
//           autem fugit ea reiciendis enim. lorem121212
//         </p>
//         <About />

//         <Link to="/About">about</Link>
//         <Link to="/">home</Link>
//         <Routes>
//           <Route
//             path="/about"
//             element={
//               <React.Suspense fallback={<Loading />}>
//                 <About /> {/* this is how we use it when it come to routing */}
//               </React.Suspense>
//             }
//           />
//         </Routes>
//       </React.Suspense>
//     </>
//   );
// }

// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }

import React, { Children } from "react";
import { resolvePath } from "react-router-dom";

function ArtistPage() {
  const About = React.lazy(() =>
    import("./Suspense_aboutpage").then((module) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(module);
        }, 3000);
      });
    })
  );

  return (
    <div>
      <h1>Profile</h1>

      <React.Suspense fallback={<Loading />}>
        <About />
      </React.Suspense>
    </div>
  );
}
export default ArtistPage;

function Loading() {
  return <h1>Loading plase wate here....</h1>;
}

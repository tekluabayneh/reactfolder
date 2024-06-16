import React from "react";
import { Outlet } from "react-router-dom";
function PageB() {
  return (
    <div className="pageB">
      <h1>Pages B</h1>
      <Outlet />
    </div>
  );
}
export default PageB;

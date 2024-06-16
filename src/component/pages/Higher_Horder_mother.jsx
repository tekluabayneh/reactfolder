/* import React from "react";

import WithLoading from "./Haigher_Order_Component";
import USER from "./Higher_order_child_component";
function UserwithLoadermother() {
  const UserwithLoader = WithLoading(USER);

  return (
    <div>
      <UserwithLoader name="Teklu"/>
      <h1>tuuuififu</h1>
    </div>
  );
}
export default UserwithLoadermother;
 */

import React from "react";
import UpdatedComponent from "./Haigher_Order_Component";

function Persone2({ Money, ClickHandler }) {
  return (
    <>
      <p>persone tow salary was 10$ per monthe now its ${Money}</p>
      <button onClick={ClickHandler}>increase</button>
    </>
  );
}
export default UpdatedComponent(Persone2);

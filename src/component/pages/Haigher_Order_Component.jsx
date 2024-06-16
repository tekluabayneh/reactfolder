/* import React, { useState } from "react";
import USER from "./Higher_order_child_component";
const WithLoading = (wrapedcomponent) => {
  const [loading, setloading] = useState(true);

  return (props) => {
    setTimeout(() => {
      setloading(false);
    }, 3000);

    return (
      <div>{loading ? <p>loading... </p> : <wrapedcomponent {...props} />}</div>
    );
  };
};

export default WithLoading;
 */
import React, { useState } from "react";

function UpdatedComponent(Orginalcomponent) {


  function NewComponent() {

    const [Money, Setmoney] = useState(10);

    const ClickHandler = () => {
      Setmoney(Money * 2);
    };
  

    return (
      <Orginalcomponent
        ClickHandler={ClickHandler}
        Money={Money}
        
      />
    );
  }
  
  return NewComponent;
}

export default UpdatedComponent;


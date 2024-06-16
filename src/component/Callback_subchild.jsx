import React, { useEffect, useState } from "react";

const Getitems = ({ getitems }) => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    setitems(getitems());
    console.log("chnage happned");
  }, [getitems]);

  return (
    <div>
      {items.map((items, index) => {
        return <div key={index}>{items}</div>;
      })}
    </div>
  );
};
export default Getitems;

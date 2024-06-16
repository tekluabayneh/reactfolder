import React, { useEffect, useState } from "react";

function getSavedValue(key, initial) {
  const getSavedValue = JSON.parse(localStorage.getItem(key));
  if (getSavedValue) {
    return getSavedValue;
  } else {
    return initial;
  }

  /*   if(initial instanceof function){

   return initial()
}else{

    return initial

   }  */
}

function Uselocalstarage(key, initial) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initial);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
export default Uselocalstarage;

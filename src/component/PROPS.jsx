// props in react in short for proprty that is props of a component refer to the property that component which also means the atribute of an component

// props a mechanism for passing data from a parent component to a child component. Props are immutable, meaning they cannot be changed by the receiving component

// props can pass data component to another component

// propps are read only component

import React from "react";
import PropTypes from "prop-types"; // this is how we import props-type

/* 
function PROPS(props) {
  const name = props.name;
  const age = props.age;
  const whenbtnclick = props.btnclick;
  return (
    <div>
      <h1>
        my name is {name} and my age is {age}
      </h1>
      <button onClick={whenbtnclick}>click</button>
    </div>
  );
}
export default PROPS;
 */
function Student_Props(props) {
  /*   const isstudent = isstudent ? "yes" : "No";
   */ return (
    <div className="Student_props">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isstudent ? "yes" : "No"}</p>
    </div>
  );
}

Student_Props.propTypes = {
  // propTypes is the mecanism to insure the passed value is of the correct datatype
  Name: PropTypes.string, // `title` must be a string and is required
  Age: PropTypes.number, // `age` must be a number
  isstudent: PropTypes.bool,
};

Student_Props.defaultProps = {
  // defaultalue for props incase the are not passed from the parent component
  Name: "Guste",
  Age: 0,
  isstudent: false,
};
export default Student_Props;



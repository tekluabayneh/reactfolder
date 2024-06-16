import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return (
      <>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        <button>click</button>

      </>
    );
  }
}

export default BuggyCounter;

/* THIS ONE IS FUNCTION VERSIN OF IT */

// function BuggyCounter() {
//   const [counter, setcounter] = useState(0);

//   function handleClick() {
//     setcounter(counter + 1);
//   }

//   if (counter) {
//     // Simulate a JS error
//     throw new Error("I crashed!");
//   }

//   return (
//     <>
//       <h1 onClick={() => handleClick}>{counter}</h1>
//       <button>click</button>

//       {meandu.map((item, index) => {
//         <p key={index}>{item}</p>;
//       })}
//     </>
//   );
// }

// export default BuggyCounter;

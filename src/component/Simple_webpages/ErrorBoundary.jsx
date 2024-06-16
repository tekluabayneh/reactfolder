import React, { Component } from "react";
/* import { withrout } from "./withRouting"; */
class Errorboundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
      error: null,
      errorInfo: null,
    };
  }


  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasError && !this.state.hasError) {
      console.log("ErrorBoundary recovered from an error.");
      // You can also clear any global error state here
    }
  }



  // if(hasError) {
  //   return <h1>Something went wrong.</h1>;
  //   this.setState(() => {
  //     hasError: false;
  //   });
  // }




  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
    // You can also log the error to an error reporting service
    // logErrorToService(error, errorInfo);
  }


  render() {
    
    if (this.state.hasError) {
      return (
        <>
          <pre>{JSON.stringify(this.state)}</pre>
          <h1>Something Went Wrong</h1>;
          
        </>
      );
    } else {
      return this.state.children;
    }
  }


}
/* export default withrout(Errorboundary); */
export default Errorboundary;


import React from "react";
import BuggyCounter from "./LASERRORBOUNDARY_CHILD.JSX";
import ErrorBoundarycomp from "./REact_Error_boundary_component";

function TekluErroboundary() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundarycomp>
        <React.Suspense fallback={<loading />}>
          <p>
            These two counters are inside the same error boundary. If one
            crashes, the error boundary will replace both of them.
          </p>
          <BuggyCounter />
          <BuggyCounter />
        </React.Suspense>
      </ErrorBoundarycomp>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      
      <ErrorBoundarycomp>
        <BuggyCounter />
      </ErrorBoundarycomp>
      
      <ErrorBoundarycomp>
        <BuggyCounter />
      </ErrorBoundarycomp>
    </div>
  );
}
export default TekluErroboundary;
function loading() {
  return <h1>loading....</h1>;
}

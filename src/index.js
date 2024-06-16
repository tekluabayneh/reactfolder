import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={"this is the error Fallback"}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//import { BrowserRouter } from "react-router-dom"; // this is  the basic one to render link

// import { HashRouter } from "react-router-dom";

//import { unstable_HistoryRouter } from "react-router-dom";
//to tak econtroll the history of the browser

// import { MemoryRouter } from "react-router-dom";// this is usfull if we want to tast the page

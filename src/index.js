import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/index.jsx";
import { MyProvider } from "./context/Context.js";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <Routes />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
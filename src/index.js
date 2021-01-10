import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Root from "./App";
import "normalize.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./assets/css/main.css";
import "normalize.css";
import "aos/dist/aos.css";

const App = (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

ReactDOM.render(App, document.getElementById("portFolio"));
serviceWorker.unregister();

import "bootstrap/dist/css/bootstrap.min.css";

import "./client/style/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { reportWebVitals } from "./client/service";
import { Router } from "./client/router";
import { store } from "./client/service/state/local/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

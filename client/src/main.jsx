import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  Provider,
} from "react-redux";

import App from "./App";

import "./styles/globals.css";

import { store } from "./app/store";

import AuthLoader from "./components/AuthLoader";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <Provider store={store}>

    <BrowserRouter>

      <AuthLoader />

      <App />

    </BrowserRouter>

  </Provider>
);
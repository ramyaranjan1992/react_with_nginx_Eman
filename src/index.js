import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

// For enabling client side routing----
import { BrowserRouter } from "react-router-dom";

//Custom ThemeProvider----
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./config/themes/MainTheme";

import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

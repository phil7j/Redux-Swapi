import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
// needed dependancies
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

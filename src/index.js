import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// REDUX SETUP
/* Creates a store enhancer that applies middleware
to the dispatch method of the Redux store.
This is handy for a variety of tasks,
such as expressing asynchronous actions in a concise manner,
or logging every action payload.
*/ import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// ROOT REDUCER
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";

// Combines redux dev tools and thunk in one line for us.
//Check Redux dev tools docs for more info.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

import { AppRegistry } from "react-native";
import App from "./src/App";
import React from "react";
import { name as appName } from "./app.json";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./src/reducer/CountReducer";

const store = createStore(reducer, applyMiddleware(thunk));
const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);

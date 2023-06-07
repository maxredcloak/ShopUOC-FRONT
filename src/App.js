import "./App.css";
import React from "react";

import { Provider } from "react-redux";
import store from "./Redux/store";
import LayoutComponent from "./Layout/Layout";

const App = () => (
  <Provider store={store}>
    <LayoutComponent />
  </Provider>
);
export default App;

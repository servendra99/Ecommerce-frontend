import { configureStore } from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducer";

let initialState = {};

const store = configureStore({
  reducer: {
    products: productReducer,
  },

  initialState,
});
export default store;

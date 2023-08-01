import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsName } from "../slices/productsSlice";

const reducer = {
  [productsName]: productReducer,
};

export const store = configureStore({
  reducer,
});

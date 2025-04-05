import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductsSlice";
import appReducer from "./slices/appSlice";
import basketReducer from "./slices/basketSlice";


export const store = configureStore({
  reducer: {
    product: productReducer,
    app: appReducer,
    basket:basketReducer
  },
});

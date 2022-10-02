import { configureStore } from "@reduxjs/toolkit";
import cubesReducer from "./slices/cubeSlice";

export const store = configureStore({
  reducer: {
    cubes: cubesReducer,
  },
});

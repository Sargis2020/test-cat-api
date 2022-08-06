import { configureStore } from "@reduxjs/toolkit";

import catReducer from "./reducer/catReducer";

export const store = configureStore({
  reducer: {
    cat: catReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
const store = configureStore({
  reducer: {
    authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import conversationReducer from "../features/ConversationSlice";
const store = configureStore({
  reducer: {
    authReducer,
    conversationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

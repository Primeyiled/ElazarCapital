import { configureStore } from "@reduxjs/toolkit";
import withdrawalReducer from "./features/withdrawalSlice";
import depositReducer from "./features/depositSlice";
import messageReducer from "./features/messageSlice";
import userReducer from "./features/userSlice";
import { loadState, saveState } from "./localStorageUtils";

const persistedState =
  typeof window !== "undefined"
    ? {
        user: loadState("user"),
        deposit: loadState("deposit"),
        withdrawal: loadState("withdrawal"),
      }
    : {};

export const store = configureStore({
  reducer: {
    withdrawal: withdrawalReducer,
    deposit: depositReducer,
    message: messageReducer,
    user: userReducer,
  },
  preloadedState: persistedState,
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = store.getState();
    saveState("user", state.user); 
    saveState("deposit", state.deposit); 
    saveState("withdrawal", state.withdrawal);
  });
}

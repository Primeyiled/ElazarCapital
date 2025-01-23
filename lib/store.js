import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import withdrawalReducer from "./features/withdrawalSlice";
import depositReducer from "./features/depositSlice";
import messageReducer from "./features/messageSlice";
import userReducer from "./features/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedWithdrawalReducer = persistReducer(
  persistConfig,
  withdrawalReducer
);
const persistedDepositReducer = persistReducer(persistConfig, depositReducer);

export const store = configureStore({
  reducer: {
    withdrawal: persistedWithdrawalReducer,
    deposit: persistedDepositReducer,
    message: messageReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore certain actions
      },
    }),
});

export const persistor = persistStore(store);

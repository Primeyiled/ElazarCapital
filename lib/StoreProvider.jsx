"use client";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/components/Loader";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>

        {children}

    </Provider>
  );
}

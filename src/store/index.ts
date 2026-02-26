import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "../utils/storage";
import { authReducer } from "./auth-slice";
import { generalReducer } from "./general-slice";
import { IAuth } from "@/interfaces/auth";
import { IGeneral } from "@/interfaces/general";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export interface RootState {
  auth: IAuth;
  general: IGeneral;
}

const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

persistStore(store);

export { store };

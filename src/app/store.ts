import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { exchangeRateApi } from "@App/services/exchange-rate-service";
import converterSlice from "./converter";
import historicalSlice from "./historical";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  converterSlice,
  historicalSlice,
  [exchangeRateApi.reducerPath]: exchangeRateApi.reducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: false,
    })
      .concat(thunk)
      .concat(exchangeRateApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

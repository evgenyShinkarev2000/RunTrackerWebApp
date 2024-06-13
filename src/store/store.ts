import { configureStore } from "@reduxjs/toolkit";
import { runTrackerApi } from "./runTrackerApi";


export const store = configureStore({
  reducer: {
    [runTrackerApi.reducerPath]: runTrackerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(runTrackerApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
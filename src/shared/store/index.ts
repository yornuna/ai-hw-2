import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () =>
  configureStore({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reducer: (state: Record<string, any> = {}) => state,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

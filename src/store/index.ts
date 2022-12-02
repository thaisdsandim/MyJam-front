import { configureStore } from "@reduxjs/toolkit";
import userReduce from './modules/user'

export const store = configureStore({
  reducer: {
    userReduce,
  },
})

export type RouteStore = ReturnType<typeof store.getState>

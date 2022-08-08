import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "../slice/user/user";

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
  }),
});

// store.subscribe(() => console.log(store.getState()));

export { store };

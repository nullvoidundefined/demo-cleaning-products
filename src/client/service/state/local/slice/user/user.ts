import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApplicationState, User } from "../../../../../../type";

const userSlice = createSlice({
  initialState: null,
  name: "user",
  reducers: {
    setUser: (state: User | null, action: PayloadAction<any>) =>
      (state = action.payload),
  },
});

const userSelector = (state: ApplicationState) => state.user;

const { setUser } = userSlice.actions;

export { userSelector, userSlice, setUser };

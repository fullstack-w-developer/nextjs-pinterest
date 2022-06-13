import { createSlice } from "@reduxjs/toolkit";

const UserSlicer = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUserInfo: (state, action) => {
        state.user = action.payload
    },
  },
});

export const {addUserInfo} = UserSlicer.actions

export default UserSlicer.reducer

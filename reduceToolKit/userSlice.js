import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
    Messages: null,
  },
  reducers: {
    getUserReducer(state, action) {
      state.user = action.payload;
      /*    console.log(action.payload); */
    },
    getMessageReducer(state, action) {
      state.Messages = action.payload;
    },
  },
});

export const { getUserReducer, getMessageReducer } = userSlice.actions;
export default userSlice.reducer;

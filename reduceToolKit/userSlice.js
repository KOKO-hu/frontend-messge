import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
    socket: null,
  },
  reducers: {
    getUserReducer(state, action) {
      state.user = action.payload;
      /*    console.log(action.payload); */
    },
    getSocketReducer(state, action) {
      state.socket = action.payload;
    },
  },
});

export const { getUserReducer, getSocketReducer } = userSlice.actions;
export default userSlice.reducer;

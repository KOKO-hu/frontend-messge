import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
  },
  reducers: {
    getUserReducer(state, action) {
      state.user = action.payload;
   /*    console.log(action.payload); */
    },
  },
});

export const { getUserReducer } = userSlice.actions;
export default userSlice.reducer;

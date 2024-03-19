import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    username: "",
    profilePicture:"",
    daily_tokens_available: 0, // Initial value for tokens_available
    purchased_tokens_available: 0,
    tokens_used: 0, // Initial value for tokens_used
    is_premium: false // Initial value for is_premium
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveuser: (state, action) => {
      state.user = action.payload;
    },
    logout:(state,action)=>{
        state.user=initialState
    }
  },
});

export const { saveuser,logout } = userSlice.actions;

export default userSlice.reducer;

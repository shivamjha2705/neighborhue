import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  chats: [
    {
      role: "assistant",
      content:
        "Hi there! I am Hue. Your new Neighbourhood assistance, How can I help you today!",
    },
  ],
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      const newChat = {
        role: action.payload.role,
        content: action.payload.content,
      };
      state.chats = [...state.chats, newChat]; // Create a new array with the updated data
    },
  },
});

export const { addChat } = chatsSlice.actions;

export default chatsSlice.reducer;

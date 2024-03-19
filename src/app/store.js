
import { configureStore } from "@reduxjs/toolkit";
import { chatsSlice } from "../features/Chat.js";
import { userSlice } from "../features/User.js";

// Define a function to serialize the Redux state
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch(error) {
    // Handle serialization errors if needed
    console.error("Error serialize redux state :", error.message);
  }
};

// Define a function to deserialize the Redux state
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // Handle deserialization errors if needed
    console.error("Error desirialize redux state :", error.message);
    return undefined;
  }
};

// Retrieve the preloaded state from local storage
const preloadedState = loadState();

// Create the Redux store with preloaded state
export const store = configureStore({
  reducer: {
    chats: chatsSlice.reducer,
    user: userSlice.reducer,
  },
  preloadedState: preloadedState,
});

// Subscribe to store changes and save the state before page reloads
store.subscribe(() => {
  saveState(store.getState());
});
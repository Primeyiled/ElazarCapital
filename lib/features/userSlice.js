import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  userData: null, // Store the user's data (e.g., name, email, etc.)
  isAuthenticated: false, // Track whether the user is authenticated
};

// Create the slice
const userSlice = createSlice({
  name: 'user', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Action to set user data
    setUserData: (state, action) => {
      state.userData = action.payload; // Update user data
      state.isAuthenticated = true; // Mark user as authenticated
    },
    // Action to clear user data (e.g., on logout)
    clearUserData: (state) => {
      state.userData = null; // Clear user data
      state.isAuthenticated = false; // Mark user as unauthenticated
    },
  },
});

// Export the actions
export const { setUserData, clearUserData } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
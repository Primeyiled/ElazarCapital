import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  selectedUserData: null,
  isAuthenticated: false,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUserData: (state, action) => {
      state.userData = action.payload; 
      state.isAuthenticated = true; 
    },
    setSelectedUser: (state, action) => {
      state.selectedUserData = action.payload;
    },

    clearUserData: (state) => {
      state.userData = null; 
      state.isAuthenticated = false;
    },
    
  },
});

export const { setUserData, clearUserData, setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
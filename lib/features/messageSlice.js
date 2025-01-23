import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: '',
  error: '',
  loading: false,
  modalOpen: false,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
      state.modalOpen = true; 
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.modalOpen = true; 
    },
    clearMessages: (state) => {
      state.success = '';
      state.error = '';
      state.modalOpen = false; 
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const { setSuccess, setError, clearMessages, setLoading, toggleModal } = messageSlice.actions;

export default messageSlice.reducer;

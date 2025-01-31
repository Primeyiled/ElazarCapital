import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyData: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistoryData: (state, action) => {
        console.log(action);
        
        state.historyData = action.payload; 
    },
    clearHistoryData: (state) => {
      state.historyData = null;
    },
  },
});

export const { setHistoryData, clearHistoryData } = historySlice.actions;

export default historySlice.reducer;

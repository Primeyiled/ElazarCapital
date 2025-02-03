import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: null,
  walletAddress: "",
  type: null,
  allWithdrawalData: null,
  selectedWithdrawalData: null,
};

const withdrawalSlice = createSlice({
  name: "withdrawal",
  initialState,
  reducers: {
    setWithdrawalData: (state, action) => {
      const { amount, walletAddress, type } = action.payload;
      state.amount = amount;
      state.walletAddress = walletAddress;
      state.type = type;
    },
    setAllWithdrawalData: (state, action) => {
      state.allWithdrawalData = action.payload;
    },
    setSelectedWithdrawalData: (state, action) => {
      state.selectedWithdrawalData = action.payload;
    },
    clearWithdrawalData: (state) => {
      state.amount = null;
      state.type = null;
      state.walletAddress = null;
    },
  },
});

export const {
  setWithdrawalData,
  clearWithdrawalData,
  setAllWithdrawalData,
  setSelectedWithdrawalData,
} = withdrawalSlice.actions;

export default withdrawalSlice.reducer;

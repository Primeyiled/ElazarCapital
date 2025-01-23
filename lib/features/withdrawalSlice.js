import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: null,
  walletAddress: '',
  type: null,
};

const withdrawalSlice = createSlice({
  name: 'withdrawal',
  initialState,
  reducers: {
    setWithdrawalData: (state, action) => {
      const { amount, walletAddress, type } = action.payload;
      state.amount = amount;
      state.walletAddress = walletAddress;
      state.type = type;
    },
  },
});

export const { setWithdrawalData } = withdrawalSlice.actions;

export default withdrawalSlice.reducer;

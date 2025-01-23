import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: null,
  type: null,
  plan: null,
  investment: null,
};

const depositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {
    setDepositData: (state, action) => {
      const { amount, type, selectedPlan, selectedInvestment } = action.payload;
      state.amount = amount;
      state.type = type;
      state.plan = selectedPlan;
      state.investment = selectedInvestment;
    },
  },
});

export const { setDepositData } = depositSlice.actions;

export default depositSlice.reducer;

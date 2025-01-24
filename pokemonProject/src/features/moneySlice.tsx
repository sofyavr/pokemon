import { createSlice } from '@reduxjs/toolkit';

const moneySlice = createSlice({
  name: 'money',
  initialState: {
    value: 0,
  },
  reducers: {
    setMoneyPerSecond: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMoneyPerSecond } = moneySlice.actions;
export default moneySlice.reducer;
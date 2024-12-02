import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type counterState = {
  value: number;
};

const initialState = {
  value: 0,
} as counterState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: { reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    }
   },
});


export const {reset,increment,decrement,incrementByAmount,decrementByAmount} = counter.actions;
export default counter.reducer;
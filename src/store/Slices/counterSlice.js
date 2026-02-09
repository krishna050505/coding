
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },   
  reducers: {
    increment: (state,action) => {state.perFormedAction=action.payload ;console.log(action) ; state.count += 1 },
    decrement: (state,action) => { state.count -= 1;state.perFormedAction=action.payload; console.log(action) },
    reset: (state,action) => { state.count = 0;state.perFormedAction=action.payload; console.log(action) },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

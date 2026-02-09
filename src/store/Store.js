import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import todoslice from './Slices/todoSlice';
import userReducer from './Slices/userSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoslice,
    users: userReducer,
   
  },
});

export default store;

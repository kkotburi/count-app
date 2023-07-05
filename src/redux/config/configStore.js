import { combineReducers, createStore } from 'redux';
import counter from '../modules/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

// ASIS : 일반 reducer
// const rootReducer = combineReducers({
//   counter: counter
// });

// const store = createStore(rootReducer);

// TODO : Redux Toolkit
const store = configureStore({
  reducer: {
    counter
  }
});

export default store;

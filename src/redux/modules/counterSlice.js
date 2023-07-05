import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 2개의 INPUT
// (1) 이름 : 의미는 크게 없음
// (2) 함수
export const __plusNumber = createAsyncThunk('PLUS_NUMBER_WAIT', (payload, thunkAPI) => {
  // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
  setTimeout(() => {
    thunkAPI.dispatch(plusNumber(payload));
  }, 3000);
});

export const __minusNumber = createAsyncThunk('MINUS_NUMBER_WAIT', (payload, thunkAPI) => {
  // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
  setTimeout(() => {
    thunkAPI.dispatch(minusNumber(payload));
  }, 3000);
});

// Action Value
const PLUS_NUMBER = 'PLUS_NUMBER';
const MINUS_NUMBER = 'MINUS_NUMBER';

// Action Creator
// export const plusNumber = (payload) => {
//   return {
//     type: PLUS_NUMBER,
//     payload
//   };
// };

// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload
//   };
// };

// Initial State
const initialState = {
  number: 0
};

// Reducer
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS_NUMBER:
//       return {
//         number: state.number + action.payload
//       };
//     case MINUS_NUMBER:
//       return {
//         number: state.number - action.payload
//       };
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plusNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    }
  }
});

export default counterSlice.reducer;
export const { plusNumber, minusNumber } = counterSlice.actions;

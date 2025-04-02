import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: {
      completed: true,
      succesfull: false,
    },
  },
  reducers: {
    loadingStarted: (state) => {
      state.value.completed = false;
    },
    loadingCompleted: (state) => {
      state.value.completed = true;
      state.value.succesfull = true;
    },
    loadingFail: (state) => {
      state.value.completed = true;
      state.value.succesfull = false;
    },
  },
});

export const { loadingStarted, loadingCompleted, loadingFail } =
  loadingSlice.actions;

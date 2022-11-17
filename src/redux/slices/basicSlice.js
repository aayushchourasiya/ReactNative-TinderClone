import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  introComplete: false,
};

const basicSlice = createSlice({
  name: 'basicReducer',
  initialState,
  reducers: {
    introCompleteAction: state => {
      state.introComplete = true;
    },
  },
});

export const {introCompleteAction} = basicSlice.actions;

export default basicSlice.reducer;

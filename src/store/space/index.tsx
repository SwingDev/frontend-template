import { createSlice } from '@reduxjs/toolkit';

import { fetchBodies } from './actions';
import type { SpaceState } from './types';

const initialState: SpaceState = {
  data: undefined,
  isFetching: false,
};

export const { reducer: space } = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchBodies.pending, (state) => {
      state.isFetching = true;
      state.error = undefined;
    });
    builder.addCase(fetchBodies.rejected, (state, { error }) => {
      state.isFetching = false;
      state.error = error;
    });
    builder.addCase(fetchBodies.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.data = payload;
    });
  },
  initialState,
  name: 'space',
  reducers: {},
});

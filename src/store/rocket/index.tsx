import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import type { RocketState } from './types';

const initialState: RocketState = {
  isFired: false,
  targetId: undefined,
};

export const {
  reducer: rocket,
  actions: { fireRocket, resetRocket, setRocketTarget },
} = createSlice({
  initialState,
  name: 'rocket',
  reducers: {
    fireRocket(state) {
      if (state.targetId) {
        state.isFired = true;
      }
    },
    resetRocket(state) {
      state.targetId = undefined;
      state.isFired = false;
    },
    setRocketTarget(state, action: PayloadAction<string>) {
      state.targetId = action.payload;
    },
  },
});

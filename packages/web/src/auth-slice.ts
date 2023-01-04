/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store/store';

export type SliceState = {
  token: string;
};

const initialState: SliceState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export const AuthState = (state: RootState) => state.auth;

export default authSlice.reducer;

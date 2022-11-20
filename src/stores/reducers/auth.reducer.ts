import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/auth.type';

interface InitialState {
  user?: IUser;
}

const initialState: InitialState = {};

export const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    clearAuth: () => initialState,
  },
});

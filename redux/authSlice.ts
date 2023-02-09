import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type AuthStateType = {
    token: string|null,
    isAuthenticated: boolean,
};

const initialState: AuthStateType = {
    token: null,
    isAuthenticated: false,
};

const expensesSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        authenticate: (state: AuthStateType, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state: AuthStateType, action: PayloadAction) => {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { authenticate, logout } = expensesSlice.actions;
export default expensesSlice.reducer;

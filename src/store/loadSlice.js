import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isProtectedLoader: false,
    isSignUp: false,
    isLogIn: false,
    isLogOut: false,
    isAuthenticating: false,
};
const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setIsProtectedLoader: (state, action) => {
            state.isProtectedLoader = action.payload;
        },
        setIsSignUp: (state, action) => {
            state.isSignUp = action.payload;
        },
        setIsLogIn: (state, action) => {
            state.isLogIn = action.payload;
        },
        setIsLogOut: (state, action) => {
            state.isLogOut = action.payload;
        },
        setIsAuthenticating: (state, action) => {
            state.isAuthenticating = action.payload;
        },
    },
});
export const { setIsProtectedLoader, setIsSignUp, setIsLogIn, setIsLogOut, setIsAuthenticating, } = loaderSlice.actions;
export default loaderSlice.reducer;

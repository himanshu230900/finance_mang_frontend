declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    user: import("../modules/user/store/userSlice").UserState;
    auth: import("../modules/auth/store/authSlice").AuthState;
    load: import("./loadSlice").LoaderTypes;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        user: import("../modules/user/store/userSlice").UserState;
        auth: import("../modules/auth/store/authSlice").AuthState;
        load: import("./loadSlice").LoaderTypes;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

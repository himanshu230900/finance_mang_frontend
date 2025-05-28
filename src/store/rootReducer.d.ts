declare const rootReducer: import("redux").Reducer<{
    user: import("../modules/user/store/userSlice").UserState;
    auth: import("../modules/auth/store/authSlice").AuthState;
    load: import("./loadSlice").LoaderTypes;
}, import("redux").UnknownAction, Partial<{
    user: import("../modules/user/store/userSlice").UserState | undefined;
    auth: import("../modules/auth/store/authSlice").AuthState | undefined;
    load: import("./loadSlice").LoaderTypes | undefined;
}>>;
export default rootReducer;

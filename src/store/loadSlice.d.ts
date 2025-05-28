export type LoaderTypes = {
    isProtectedLoader: boolean;
    isSignUp: boolean;
    isLogIn: boolean;
    isLogOut: boolean;
    isAuthenticating: boolean;
};
export declare const setIsProtectedLoader: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loader/setIsProtectedLoader">, setIsSignUp: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loader/setIsSignUp">, setIsLogIn: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loader/setIsLogIn">, setIsLogOut: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loader/setIsLogOut">, setIsAuthenticating: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loader/setIsAuthenticating">;
declare const _default: import("redux").Reducer<LoaderTypes>;
export default _default;

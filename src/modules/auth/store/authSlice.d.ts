export interface AuthState {
    status: boolean;
}
export declare const login: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/login">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">;
declare const _default: import("redux").Reducer<AuthState>;
export default _default;

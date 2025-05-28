import { User } from 'firebase/auth';
export type UserState = {
    user: User | null;
};
export declare const setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<User | null, "user/setUser">;
declare const _default: import("redux").Reducer<UserState>;
export default _default;

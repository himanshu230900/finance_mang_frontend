import { AppDispatch } from '../../../store';
export declare const signUp: (email: string, password: string, dispatch: AppDispatch) => Promise<import("@firebase/auth").UserCredential>;
export declare const logIn: (email: string, password: string, dispatch: AppDispatch) => Promise<void>;
export declare const logOut: (dispatch: AppDispatch) => Promise<void>;

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import { login, logout } from '../store/authSlice';
import { auth } from '../../firebase/index';
import { setUser } from '../../user/store/userSlice';
import { setIsLogIn, setIsLogOut, setIsSignUp } from '../../../store/loadSlice';
import { getLoginSignUpErrorMessage } from '../../../utils/general';
export const signUp = async (email, password, dispatch) => {
    try {
        dispatch(setIsSignUp(true));
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        return userCredential;
    }
    catch (err) {
        console.error('Error signingUp', err);
        throw new Error(getLoginSignUpErrorMessage(err));
    }
    finally {
        dispatch(setIsSignUp(false));
    }
};
export const logIn = async (email, password, dispatch) => {
    try {
        dispatch(setIsLogIn(true));
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
        dispatch(login());
    }
    catch (error) {
        console.error('Error Logging In', error);
        throw new Error(getLoginSignUpErrorMessage(error));
    }
    finally {
        dispatch(setIsLogIn(false));
    }
};
export const logOut = async (dispatch) => {
    try {
        dispatch(setIsLogOut(true));
        await signOut(auth);
        dispatch(logout());
        dispatch(setUser(null));
    }
    catch (error) {
        console.error(`Error logging out: ${error}`);
    }
    finally {
        dispatch(setIsLogOut(false));
    }
};

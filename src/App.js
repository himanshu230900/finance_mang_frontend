import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticating } from '../src/store/loadSlice';
import { login, logout } from './modules/auth/store/authSlice';
import { setUser } from './modules/user/store/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './modules/firebase';
import { NavBar } from './components/common';
import { Outlet } from 'react-router-dom';
function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.load.isAuthenticating);
    useEffect(() => {
        const checkAuthState = () => {
            dispatch(setIsAuthenticating(true));
            const unSubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch(login());
                    dispatch(setUser(user));
                }
                else {
                    dispatch(logout());
                    dispatch(setUser(null));
                }
                dispatch(setIsAuthenticating(false));
            });
            return () => unSubscribe();
        };
        checkAuthState();
    }, [dispatch]);
    return !loading ? (_jsx("div", { className: "flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-blue-300", children: _jsxs("div", { className: "flex flex-col w-full max-w-7xl mx-auto", children: [_jsx(NavBar, {}), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) })] }) })) : (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx("div", { className: "animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" }) }));
}
export default App;

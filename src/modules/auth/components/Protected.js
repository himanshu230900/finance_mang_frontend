import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProtectedLoader from './ProtectedLoader';
import { setIsProtectedLoader } from '../../../store/loadSlice';
export default function Protected({ children, authentication = true, }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Get loader and auth status from Redux store
    const loader = useSelector((state) => state.load.isProtectedLoader);
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        // Ensure that the loader is set to false when the component mounts
        dispatch(setIsProtectedLoader(false));
        // Handle authentication logic
        if (authentication && !authStatus) {
            navigate('/login');
        }
        else if (!authentication && authStatus !== authentication) {
            navigate('/');
        }
    }, [authStatus, authentication, navigate, dispatch]);
    return loader ? _jsx(ProtectedLoader, {}) : _jsx(_Fragment, { children: children });
}

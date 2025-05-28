import { jsx as _jsx } from "react/jsx-runtime";
import { Spinner } from '../../../components';
function ProtectedLoader() {
    return (_jsx("div", { className: 'absolute h-full w-full z-50 flex justify-center items-center bg-white', children: _jsx(Spinner, {}) }));
}
export default ProtectedLoader;

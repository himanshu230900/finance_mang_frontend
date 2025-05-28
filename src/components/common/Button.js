import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ children, onClick, className }) => {
    return (_jsx("button", { onClick: onClick, className: `text-white py-2 px-4 rounded-full ${className}`, children: children }));
};
export default Button;

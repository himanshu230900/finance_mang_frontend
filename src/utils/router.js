import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../modules/home/pages/Home";
import { Protected } from "../modules/auth/components";
import Login from "../modules/auth/pages/login";
import SignUp from "../modules/auth/pages/signUp";
import Dashboard from "../modules/dashboard/pages/Dashboard";
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            { path: '/', element: _jsx(Home, {}) },
            {
                path: '/login',
                element: (_jsx(Protected, { authentication: false, children: _jsx(Login, {}) }))
            },
            {
                path: '/signup',
                element: (_jsx(Protected, { authentication: false, children: _jsx(SignUp, {}) }))
            },
            {
                path: '/dashboard',
                element: (_jsx(Protected, { authentication: true, children: _jsx(Dashboard, {}) }))
            },
            {
                path: '/transactions',
                element: (_jsx(Protected, { authentication: true, children: _jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Transactions" }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\uD83D\uDEA7" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-gray-600", children: "Transaction management features will be available here." })] })] }) }) }))
            },
            {
                path: '/goals',
                element: (_jsx(Protected, { authentication: true, children: _jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Financial Goals" }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\uD83C\uDFAF" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-gray-600", children: "Goal tracking and management features will be available here." })] })] }) }) }))
            },
            {
                path: '/investments',
                element: (_jsx(Protected, { authentication: true, children: _jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Investments" }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\uD83D\uDCC8" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-gray-600", children: "Investment tracking and portfolio management features will be available here." })] })] }) }) }))
            },
            {
                path: '/profile',
                element: (_jsx(Protected, { authentication: true, children: _jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Profile Settings" }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\u2699\uFE0F" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-gray-600", children: "Profile management features will be available here." })] })] }) }) }))
            },
            {
                path: '/billing',
                element: (_jsx(Protected, { authentication: true, children: _jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Billing & Subscription" }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\uD83D\uDCB3" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-gray-600", children: "Billing and subscription management features will be available here." })] })] }) }) }))
            },
            {
                path: '/help',
                element: (_jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Help & Support" }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg text-center", children: [_jsx("div", { className: "text-6xl mb-4", children: "\u2753" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Need Help?" }), _jsx("p", { className: "text-gray-600 mb-6", children: "We're here to help you with any questions or issues." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8", children: [_jsxs("div", { className: "p-6 border border-gray-200 rounded-xl", children: [_jsx("div", { className: "text-3xl mb-4", children: "\uD83D\uDCE7" }), _jsx("h3", { className: "font-semibold mb-2", children: "Email Support" }), _jsx("p", { className: "text-gray-600 text-sm", children: "support@fint.com" })] }), _jsxs("div", { className: "p-6 border border-gray-200 rounded-xl", children: [_jsx("div", { className: "text-3xl mb-4", children: "\uD83D\uDCAC" }), _jsx("h3", { className: "font-semibold mb-2", children: "Live Chat" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Available 24/7" })] }), _jsxs("div", { className: "p-6 border border-gray-200 rounded-xl", children: [_jsx("div", { className: "text-3xl mb-4", children: "\uD83D\uDCDA" }), _jsx("h3", { className: "font-semibold mb-2", children: "Documentation" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Comprehensive guides" })] })] })] })] }) }))
            }
        ]
    }
]);
const Router = () => _jsx(RouterProvider, { router: router });
export default Router;

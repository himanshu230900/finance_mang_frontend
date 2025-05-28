import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Features, Intro, Pricing, Process, Review, Testimonial } from "../components";
const Home = () => {
    return (_jsxs("div", { className: "space-y-12 pb-10", children: [_jsx(Intro, {}), _jsx("section", { id: "features", children: _jsx(Features, {}) }), _jsx("section", { id: "review", children: _jsx(Review, {}) }), _jsx("section", { id: "process", children: _jsx(Process, {}) }), _jsx("section", { id: "testimonial", children: _jsx(Testimonial, {}) }), _jsx("section", { id: "pricing", children: _jsx(Pricing, {}) })] }));
};
export default Home;

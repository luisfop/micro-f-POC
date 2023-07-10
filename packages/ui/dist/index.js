import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, AppShell as MantineAppShell, Title, MantineProvider, Navbar } from "@mantine/core";
import { BrowserRouter, Outlet, Routes, Link, Route } from "react-router-dom";
// component exports
export * from "./Button";
export * from "./Header";
const AppShell = ({ title, colorScheme, routes, navLinks }) => {
    return (_jsx(BrowserRouter, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: {
                colorScheme: colorScheme,
            } }, { children: _jsxs(MantineAppShell, Object.assign({ navbar: _jsx(Navbar, Object.assign({ width: { base: 300 }, height: 500, p: 'xs' }, { children: navLinks.map((link, index) => (_jsx(Link, Object.assign({ to: link.path }, { children: link.label }), index))) })), header: _jsx(Header, Object.assign({ height: 60, p: 'xs', sx: {
                        display: 'flex',
                    } }, { children: _jsx(Title, { children: title }) })) }, { children: [_jsx(Routes, { children: routes.map((route, index) => (_jsx(Route, { path: route.path, element: _jsx(route.element, {}) }, index))) }), _jsx(Outlet, {})] })) })) }));
};
export default AppShell;

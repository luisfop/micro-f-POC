import * as React from "react";
import { Route } from "react-router-dom";
export * from "./Button";
export * from "./Header";
export type Route = {
    path: string;
    element: React.FunctionComponent;
};
export type NavLink = {
    label: string;
    path: string;
};
declare const AppShell: ({ title, colorScheme, routes, navLinks }: {
    title: string;
    colorScheme?: "dark" | "light" | undefined;
    routes: Route[];
    navLinks: NavLink[];
}) => JSX.Element;
export default AppShell;
//# sourceMappingURL=index.d.ts.map
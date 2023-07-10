import * as React from "react";
import { Header, AppShell as MantineAppShell, Title, MantineProvider, Navbar } from "@mantine/core";
import { BrowserRouter, Outlet, Routes, Link, Route } from "react-router-dom";

// component exports
export * from "./Button";
export * from "./Header";


export type Route = {
    path: string;
    element: React.FunctionComponent;
};

export type NavLink = {
    label: string;
    path: string;
}

const AppShell = ({ title, colorScheme, routes, navLinks }: 
    { 
        title: string, 
        colorScheme?: 'dark' | "light", 
        routes: Route[],
        navLinks: NavLink[]
     }) => 
    {
    return (
        <BrowserRouter>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: colorScheme,
                }}
            >
                <MantineAppShell
                navbar={
                    <Navbar
                       width={{base:300}} 
                       height={500}
                       p='xs'>
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path}>
                                {link.label}
                            </Link>
                        ))}
                       </Navbar>
                }
                 header={
                    <Header
                        height={60}
                        p='xs'
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Title>{title}</Title>
                    </Header>
                }>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.element />} />
                        ))}
                    </Routes>
                    <Outlet />
                </MantineAppShell>
            </MantineProvider>
        </BrowserRouter>
    )
}

export default AppShell